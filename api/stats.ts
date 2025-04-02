import { Pool } from 'pg';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Create the pool outside the handler to enable connection reuse
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('API endpoint called');
  console.log('Database URL:', process.env.POSTGRES_URL ? 'Set' : 'Not set');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Test database connection first
    try {
      await pool.query('SELECT NOW()');
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return res.status(500).json({ 
        error: 'Database connection failed',
        details: dbError instanceof Error ? dbError.message : 'Unknown error'
      });
    }

    // Fetch BONE token stats from tracked_tokens
    console.log('Fetching BONE token stats...');
    const boneTokenQuery = await pool.query(`
      SELECT 
        last_price,
        total_supply,
        holders_count,
        created_at
      FROM tracked_tokens 
      WHERE policy_id = '279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f'
      LIMIT 1
    `);

    if (boneTokenQuery.rows.length === 0) {
      console.log('No BONE token data found');
      return res.status(404).json({ error: 'BONE token data not found' });
    }

    console.log('BONE token data found:', boneTokenQuery.rows[0]);

    // Fetch WalletPup stats
    console.log('Fetching WalletPup stats...');
    const [userStats, walletStats, verifiedWalletCount, transactionCount] = await Promise.all([
      // Total unique users
      pool.query(`
        SELECT COUNT(DISTINCT discord_id) as total_users 
        FROM users
      `),
      // Total wallets
      pool.query(`
        SELECT COUNT(*) as total_wallets 
        FROM wallets
      `),
      // Verified wallets
      pool.query(`
        SELECT COUNT(*) as verified_wallets 
        FROM wallets 
        WHERE is_verified = true
      `),
      // Total transactions
      pool.query(`
        SELECT SUM(total_transactions) as total_transactions 
        FROM wallets
      `)
    ]);

    console.log('Stats fetched successfully');

    const boneToken = boneTokenQuery.rows[0];
    const marketCap = boneToken.last_price * (boneToken.total_supply / Math.pow(10, 6));
    const ageInDays = Math.floor((new Date().getTime() - new Date(boneToken.created_at).getTime()) / (1000 * 60 * 60 * 24));

    const stats = {
      walletPupStats: {
        users: userStats.rows[0].total_users.toLocaleString(),
        wallets: walletStats.rows[0].total_wallets.toLocaleString(),
        verifiedWallets: verifiedWalletCount.rows[0].verified_wallets.toLocaleString(),
        trackedTokens: "1", // BONE token
        transactions: transactionCount.rows[0].total_transactions?.toLocaleString() || "0",
        adaWon: "Coming Soon"
      },
      boneStats: {
        marketCap: `$${(marketCap / 1000000).toFixed(1)}M`,
        price: `$${boneToken.last_price?.toFixed(4) || "0.0000"}`,
        age: `${ageInDays} days`,
        holders: boneToken.holders_count?.toLocaleString() || "0"
      }
    };

    console.log('Returning stats:', stats);
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error in stats endpoint:', error);
    res.status(500).json({ 
      error: 'Failed to fetch statistics',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    // Don't end the pool as it should be reused
    console.log('Request completed');
  }
}

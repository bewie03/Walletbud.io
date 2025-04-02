import { Pool } from 'pg';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Configure for serverless
export const config = {
  maxDuration: 10, // Timeout after 10 seconds
};

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  },
  // Add connection pool settings
  max: 1, // Maximum number of clients
  idleTimeoutMillis: 5000, // Close idle clients after 5 seconds
  connectionTimeoutMillis: 5000 // Return an error after 5 seconds if connection could not be established
});

interface StatsResult {
  users?: number;
  wallets?: number;
  verified?: number;
  transactions?: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;
  try {
    // Get a client from the pool
    client = await pool.connect();

    // Test connection
    await client.query('SELECT NOW()');

    // Fetch BONE token stats
    const boneTokenQuery = await client.query(`
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
      return res.status(404).json({ error: 'BONE token data not found' });
    }

    // Fetch all stats in parallel
    const [userStats, walletStats, verifiedWallets, transactions] = await Promise.all([
      client.query('SELECT COUNT(DISTINCT discord_id) as total_users FROM users'),
      client.query('SELECT COUNT(*) as total_wallets FROM wallets'),
      client.query('SELECT COUNT(*) as verified_wallets FROM wallets WHERE is_verified = true'),
      client.query('SELECT SUM(total_transactions) as total_transactions FROM wallets')
    ]);

    const boneToken = boneTokenQuery.rows[0];
    const marketCap = boneToken.last_price * (boneToken.total_supply / Math.pow(10, 6));
    const ageInDays = Math.floor((Date.now() - new Date(boneToken.created_at).getTime()) / (1000 * 60 * 60 * 24));

    const stats = {
      walletPupStats: {
        users: userStats.rows[0].total_users?.toLocaleString() || "0",
        wallets: walletStats.rows[0].total_wallets?.toLocaleString() || "0",
        verifiedWallets: verifiedWallets.rows[0].verified_wallets?.toLocaleString() || "0",
        trackedTokens: "1",
        transactions: transactions.rows[0].total_transactions?.toLocaleString() || "0",
        adaWon: "Coming Soon"
      },
      boneStats: {
        marketCap: `$${(marketCap / 1000000).toFixed(1)}M`,
        price: `$${boneToken.last_price?.toFixed(4) || "0.0000"}`,
        age: `${ageInDays} days`,
        holders: boneToken.holders_count?.toLocaleString() || "0"
      }
    };

    return res.status(200).json(stats);
  } catch (error: any) {
    console.error('Error in stats endpoint:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    return res.status(500).json({
      error: 'Failed to fetch statistics',
      details: error.message,
      code: error.code
    });
  } finally {
    // Always release the client back to the pool
    if (client) {
      client.release();
    }
  }
}

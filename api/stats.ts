import { Pool } from 'pg';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface StatsResult {
  users?: number;
  wallets?: number;
  verified?: number;
  transactions?: number;
}

// Log all environment variables to debug
const allEnvVars = Object.keys(process.env).filter(key => key.includes('POSTGRES'));
console.log('Available environment variables:', allEnvVars);

// Create the pool outside the handler to enable connection reuse
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.POSTGRES_URI,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Log environment and request info
  console.log('Environment:', {
    nodeEnv: process.env.NODE_ENV,
    hasDbUrl: !!process.env.POSTGRES_URL,
    hasDbUri: !!process.env.POSTGRES_URI,
    dbUrlStart: process.env.POSTGRES_URL ? process.env.POSTGRES_URL.substring(0, 20) + '...' : 'not set',
    dbUriStart: process.env.POSTGRES_URI ? process.env.POSTGRES_URI.substring(0, 20) + '...' : 'not set'
  });

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. Test database connection
    console.log('Testing database connection...');
    try {
      const testResult = await pool.query('SELECT NOW()');
      console.log('Database connection successful:', testResult.rows[0]);
    } catch (dbError: any) {
      console.error('Database connection failed:', {
        message: dbError.message,
        code: dbError.code,
        stack: dbError.stack,
        connectionString: process.env.POSTGRES_URL ? 'Set' : 'Not set'
      });
      return res.status(500).json({
        error: 'Database connection failed',
        details: dbError.message,
        code: dbError.code,
        env: allEnvVars
      });
    }

    // 2. Get BONE token data
    console.log('Fetching BONE token data...');
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

    console.log('BONE data found:', boneTokenQuery.rows[0]);

    // 3. Get WalletPup stats
    console.log('Fetching WalletPup stats...');
    const statsPromises: Promise<StatsResult>[] = [
      pool.query('SELECT COUNT(DISTINCT discord_id) as total_users FROM users')
        .then(r => ({ users: Number(r.rows[0].total_users) }))
        .catch(e => {
          console.error('Error fetching users:', e);
          return { users: 0 };
        }),
      
      pool.query('SELECT COUNT(*) as total_wallets FROM wallets')
        .then(r => ({ wallets: Number(r.rows[0].total_wallets) }))
        .catch(e => {
          console.error('Error fetching wallets:', e);
          return { wallets: 0 };
        }),
      
      pool.query('SELECT COUNT(*) as verified_wallets FROM wallets WHERE is_verified = true')
        .then(r => ({ verified: Number(r.rows[0].verified_wallets) }))
        .catch(e => {
          console.error('Error fetching verified wallets:', e);
          return { verified: 0 };
        }),
      
      pool.query('SELECT SUM(total_transactions) as total_transactions FROM wallets')
        .then(r => ({ transactions: Number(r.rows[0].total_transactions) }))
        .catch(e => {
          console.error('Error fetching transactions:', e);
          return { transactions: 0 };
        })
    ];

    const results = await Promise.all(statsPromises);
    const stats = results.reduce((acc, curr) => ({ ...acc, ...curr }), {} as StatsResult);
    console.log('Stats fetched:', stats);

    // 4. Process and format data
    const boneToken = boneTokenQuery.rows[0];
    const marketCap = boneToken.last_price * (boneToken.total_supply / Math.pow(10, 6));
    const ageInDays = Math.floor((new Date().getTime() - new Date(boneToken.created_at).getTime()) / (1000 * 60 * 60 * 24));

    const responseStats = {
      walletPupStats: {
        users: (stats.users || 0).toLocaleString(),
        wallets: (stats.wallets || 0).toLocaleString(),
        verifiedWallets: (stats.verified || 0).toLocaleString(),
        trackedTokens: "1", // BONE token
        transactions: (stats.transactions || 0).toLocaleString(),
        adaWon: "Coming Soon"
      },
      boneStats: {
        marketCap: `$${(marketCap / 1000000).toFixed(1)}M`,
        price: `$${boneToken.last_price?.toFixed(4) || "0.0000"}`,
        age: `${ageInDays} days`,
        holders: boneToken.holders_count?.toLocaleString() || "0"
      }
    };

    console.log('Returning stats:', responseStats);
    return res.status(200).json(responseStats);
  } catch (error: any) {
    // Log the full error details
    console.error('Fatal error in stats endpoint:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    return res.status(500).json({
      error: 'Failed to fetch statistics',
      details: error.message,
      code: error.code
    });
  }
}

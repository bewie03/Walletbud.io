import pool from '../utils/db';

export async function fetchStats() {
  try {
    // Fetch BONE token stats from tracked_tokens
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

    // Fetch WalletPup stats
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

    const boneToken = boneTokenQuery.rows[0];
    const marketCap = boneToken.last_price * (boneToken.total_supply / Math.pow(10, 6)); // Assuming 6 decimals
    const ageInDays = Math.floor((new Date().getTime() - new Date(boneToken.created_at).getTime()) / (1000 * 60 * 60 * 24));

    return {
      walletPupStats: {
        users: userStats.rows[0].total_users.toLocaleString(),
        wallets: walletStats.rows[0].total_wallets.toLocaleString(),
        verifiedWallets: verifiedWalletCount.rows[0].verified_wallets.toLocaleString(),
        trackedTokens: "1", // BONE token
        transactions: transactionCount.rows[0].total_transactions.toLocaleString() || "0",
        adaWon: "Coming Soon" // You might want to add this to your database if needed
      },
      boneStats: {
        marketCap: `$${(marketCap / 1000000).toFixed(1)}M`,
        price: `$${boneToken.last_price?.toFixed(4) || "0.0000"}`,
        age: `${ageInDays} days`,
        holders: boneToken.holders_count?.toLocaleString() || "0"
      }
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
}

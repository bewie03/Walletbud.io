import { Pool } from 'pg';

// Create a new pool instance
const pool = new Pool({
  connectionString: import.meta.env.VITE_POSTGRES_URL,
  ssl: import.meta.env.PROD ? {
    rejectUnauthorized: false
  } : false
});

export default pool;

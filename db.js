const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres.kpabkzqdblvieyiihhal:Santy2024#3.@aws-0-us-east-1.pooler.supabase.com:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;

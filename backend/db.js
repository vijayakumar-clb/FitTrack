const { Pool } = require('pg');

// The Connection Pool handles multiple simultaneous connections safely
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'fittrack_db',
  user: process.env.DB_USER || 'fittrack_user',
  password: process.env.DB_PASSWORD || 'secure_password_change_me',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

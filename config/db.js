const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : process.env.DB_POOL_SIZE,
    acquireTimeout: process.env.DB_ACQUIRE_CONNECTION_TIMEOUT,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD
});

module.exports = pool;
const pg = require('pg');
let pool;
// for deployed app
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
// for localhost
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'duvall-inventory',
    });
}
module.exports = pool;

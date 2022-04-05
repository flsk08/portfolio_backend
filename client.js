const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  connectionString: process.env.ELEPHANT_CONNECTION_STRING,
});

module.exports = pool;
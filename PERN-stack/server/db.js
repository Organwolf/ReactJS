const Pool = require("pg").Pool;

const pool = new Pool({
  user: "aronpolner",
  password: "wowwow",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;

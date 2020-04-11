const { Pool } = require('pg')

const pool = new Pool({
  // user: 'postgres',
  user: 'aronpolner',
  host: 'localhost',
  database: 'fullstack_blog',
  // database: 'postgres',
  password: '',
  post: 5432
})

module.exports = pool

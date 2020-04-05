const { Pool } = require('pg')

const pool = new Pool({
  user: 'aronpolner',
  host: 'localhost',
  database: 'fullstack_blog',
  password: '',
  post: 5432
})

module.exports = pool
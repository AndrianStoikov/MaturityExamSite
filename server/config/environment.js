

// TODO: SET DATABASE TO MLAB ACCOUNT

const DB_USER = 'Andrian'
const DB_PASSWORD = 'hercogit12'

module.exports = {

  database: `mongodb://${DB_USER}:${DB_PASSWORD}@ds121295.mlab.com:21295/maturity-exam`

  // Local database
  // database: 'mongodb://localhost/za-maturata'
}

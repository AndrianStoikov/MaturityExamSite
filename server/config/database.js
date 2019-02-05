const mongoose = require('mongoose')

const User = require('../models/User')
const encryption = require('../utilities/encryption')

// TODO: Fix admin function to use proper name and password
function seedAdmin () {
  User.find({username: 'Admin'}).then(users => {
    if (users.length === 0) {
      let pwd = 'password'
      let salt = encryption.generateSalt()
      let hashedPwd = encryption.generateHashedPassword(salt, pwd)

      let adminData = {
        username: 'Admin',
        salt: salt,
        password: hashedPwd,
        roles: ['Admin'],
      }

      User.create(adminData).then(admin => {
        console.log(`Seeded admin: ${admin.username}`)
      })
    }
  })
}

module.exports = (envConfig) => {
  mongoose.Promise = global.Promise
  mongoose.connect(envConfig.database, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  })

  mongoose.set('useCreateIndex', true)
  mongoose.set('useFindAndModify', false);

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB.')
  })

  mongoose.connection.on('error', () => {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
  })

  seedAdmin()
}

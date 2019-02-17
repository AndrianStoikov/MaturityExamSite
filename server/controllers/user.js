const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
  login: {
    post: (req, res) => {
      let userData = req.body

      User.findOne({username: userData.username}).then(user => {
        if (!user || !user.authenticate(userData.password)) {
          return res.status(401).send({message: 'Wrong credentials!'})
        }

        req.logIn(user, (err, user) => {
          if (err) {
            console.log(err)
            return res.status(401).send({message: err})
          }

          const payload = {
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            sub: req.user._id,
          }

          // create a token string
          const token = jwt.sign(payload,
            'iEfy4a43/mOz3WNPsXFxsKMeriW00XnS6dSqhZUGeF7yk7bD4Jvh1lcx5ACUS1skQPeKlJRNR0zXflV2Qj00UPifYVWY3jvdG9tNVUMKCVXkPiKU6k+w+Llv31foXmB5IvTFTUcFwQTQ8eYa0qOEQC/sut+MdMfa1I5wtQS4wVA=')

          let userObj = {
            id: req.user._id,
            username: req.user.username,
            roles: req.user.roles,
          }

          let responseData = {
            token: token,
            user: userObj,
          }

          res.cookie('token', token, {
            maxAge: 3600000 + Date.now(),
            httpOnly: false,
          })

          res.status(200).send(responseData)
        })
      })
    },
  },

  logout: (req, res) => {
    req.logout()
    res.status(200).end()
  },
}

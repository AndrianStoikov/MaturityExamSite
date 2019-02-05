const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1]

  // decode the token using a secret key-phrase
  return jwt.verify(token, 'iEfy4a43/mOz3WNPsXFxsKMeriW00XnS6dSqhZUGeF7yk7bD4Jvh1lcx5ACUS1skQPeKlJRNR0zXflV2Qj00UPifYVWY3jvdG9tNVUMKCVXkPiKU6k+w+Llv31foXmB5IvTFTUcFwQTQ8eYa0qOEQC/sut+MdMfa1I5wtQS4wVA=', (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.status(401).end()
    }

    const userId = decoded.sub
    User
    .findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(401).end()
      }
      req.user = user
      next()
    })
  })
}

module.exports.isAdministrator = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1]

  // decode the token using a secret key-phrase
  return jwt.verify(token, 'iEfy4a43/mOz3WNPsXFxsKMeriW00XnS6dSqhZUGeF7yk7bD4Jvh1lcx5ACUS1skQPeKlJRNR0zXflV2Qj00UPifYVWY3jvdG9tNVUMKCVXkPiKU6k+w+Llv31foXmB5IvTFTUcFwQTQ8eYa0qOEQC/sut+MdMfa1I5wtQS4wVA=', (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.status(401).end()
    }

    const userId = decoded.sub
    User
    .findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(401).end()
      }

      if (user.roles.indexOf('Admin') === -1) {
        return res.status(401).end()
      }

      req.user = user
      next()
    })
  })
}

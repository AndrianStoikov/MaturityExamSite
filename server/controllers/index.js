const userController = require('./user')
const homeController = require('./home')
const authorController = require('./author')

module.exports = {
  user: userController,
  home: homeController,
  author: authorController
}

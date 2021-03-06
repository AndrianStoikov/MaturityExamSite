const userController = require('./user')
const homeController = require('./home')
const authorController = require('./author')
const testController = require('./test')
const workController = require('./work')
const creditController = require('./credit')

module.exports = {
  user: userController,
  home: homeController,
  author: authorController,
  test: testController,
  work: workController,
  credit: creditController
}

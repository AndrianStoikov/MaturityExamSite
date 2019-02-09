const controllers = require('../controllers')
const authCheck = require('../middlewares/AuthCheck')

module.exports = (app) => {
  app.get('/', controllers.home.home.get)

  app.post('/authors/add', controllers.author.addAuthor.post)

  app.post('/authors/:id/add-work', controllers.author.addWork.post)

  app.get('/authors/:name', controllers.author.getAuthor.get)

  app.patch('/authors/:id', controllers.author.editAuthor.patch)

  app.get('/tests', controllers.test.allTests.get)
  // LOGIN / LOGOUT
  // app.get('/api/user/', controllers.user.home.get)
  // app.post('/api/user/logout', controllers.user.logout)

  // app.all('*', controllers.home.redirectToHome)
}

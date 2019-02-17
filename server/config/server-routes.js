const controllers = require('../controllers')
const authCheck = require('../middlewares/AuthCheck')
const bodyParser = require('body-parser')
module.exports = (app) => {
  app.get('/', controllers.home.home.get)

  // AUTHORS
  app.get('/authors', controllers.author.getAllAuthors.get)

  app.post('/authors/add', controllers.author.addAuthor.post)

  app.post('/authors/:id/add-work', controllers.author.addWork.post)

  app.get('/authors/:name', controllers.author.getAuthor.get)

  app.post('/authors/:name', controllers.author.editAuthor.post)

  // TESTS
  app.get('/tests', controllers.test.allTests.get)

  app.post('/tests/add', controllers.test.addTest.post)

  app.post('/tests/:id/add-question', controllers.test.addQuestion.post)

  // WORKS
  app.get('/works/:id', controllers.work.getWork.get)
  app.post('/works/:id', controllers.work.editWork.post)
  app.post('/works/delete/:id', controllers.work.deleteWork.post)

  //LOGIN / LOGOUT
  app.post('/api/user/login', controllers.user.login.post)
  app.post('/api/user/logout', controllers.user.logout)

  // app.all('*', controllers.home.redirectToHome)
}

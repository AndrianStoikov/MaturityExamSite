const controllers = require('../controllers')
const authCheck = require('../middlewares/AuthCheck')
const bodyParser = require('body-parser')
module.exports = (app) => {
  app.get('/', controllers.home.home.get)

  // AUTHORS
  app.get('/authors', controllers.author.getAllAuthors.get)

  app.post('/authors/add', authCheck.isAdministrator, controllers.author.addAuthor.post)

  app.post('/authors/:id/add-work', authCheck.isAdministrator, controllers.author.addWork.post)

  app.get('/authors/:name', controllers.author.getAuthor.get)

  app.post('/authors/:name', authCheck.isAdministrator, controllers.author.editAuthor.post)

  // TESTS
  app.get('/tests', controllers.test.allTests.get)

  app.get('/tests/:id', controllers.test.getTest.get)

  app.post('/tests/add', authCheck.isAdministrator, controllers.test.addTest.post)

  app.post('/tests/delete/:id',authCheck.isAdministrator, controllers.test.deleteTest.post)

  app.post('/tests/:id/add-question', authCheck.isAdministrator, controllers.test.addQuestion.post)

  app.get('/tests/:testId/question/:questionId', controllers.test.getQuestion.get)

  app.post('/tests/:testId/question/:questionId', authCheck.isAdministrator, controllers.test.editQuestion.post)

  app.post('/tests/:testId/question/delete/:questionId', authCheck.isAdministrator, controllers.test.deleteQuestion.post)

  // WORKS
  app.get('/works/:id', controllers.work.getWork.get)
  app.post('/works/:id', authCheck.isAdministrator, controllers.work.editWork.post)
  app.post('/works/delete/:id', authCheck.isAdministrator, controllers.work.deleteWork.post)

  // CREDITS
  app.get('/credits/all', controllers.credit.getAllCredits.get)
  app.post('/credits', authCheck.isAdministrator, controllers.credit.createCredit.post)

  app.get('/credits/:id', controllers.credit.getCredit.get)
  app.post('/credits/:id', authCheck.isAdministrator, controllers.credit.editCredit.post)
  app.post('/credits/delete/:id', authCheck.isAdministrator, controllers.credit.deleteCredit.post)

  //LOGIN / LOGOUT
  app.post('/api/user/login', controllers.user.login.post)
  app.post('/api/user/logout', controllers.user.logout)

  // app.all('*', controllers.home.redirectToHome)
}

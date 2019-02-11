const Test = require('../models/Test')

module.exports = {
  allTests: {
    get: (req, res) => {
      res.sendStatus(200)
    },
  },
  addTest: {
    post: (req, res) => {
      let testObject = {
        name: req.body.name,
        questions: [],
      }

      Test.create(testObject).then((newTest) => {
        res.status(200).send({
          response: 'Test successfully created',
          test: newTest,
        })
      })
    },
  },
  addQuestion: {
    post: (req, res) => {
      let questionObject = req.body
      let questionId = req.params.id

      Test.findById(questionId).then((test) => {
        if(test == null)
          res.status(400).send({
            response: "Please provide correct test ID"
          })

        console.log(test)
        res.sendStatus(200)
      })
      .catch((err)=> {
        console.log(err)

        res.status(500).send({
          response: "Something went wrong."
        })
      })
    },
  },
}

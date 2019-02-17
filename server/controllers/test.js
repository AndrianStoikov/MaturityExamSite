const Test = require('../models/Test')

module.exports = {
  allTests: {
    get: (req, res) => {
      Test.find().then((tests) => {
        res.status(200).send({
          'response': 'Tests successfully retrived',
          tests: tests,
        })
      }).catch((err) => {
        console.log(err)
      })
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
        if (test == null)
          res.status(400).send({
            response: 'Please provide correct test ID',
          })

        Test.findByIdAndUpdate(questionId, {$push: {questions: questionObject}},
          {new: true}).then((success) => {

          console.log(success.questions[success.questions.length - 1])

          res.status(200).send({
            response: 'Question added successfully',
            question: success.questions[success.questions.length - 1],
          })
        })
      }).catch((err) => {
        console.log(err)

        res.status(500).send({
          response: 'Something went wrong.',
        })
      })
    },
  },
}

// TODO: FIND ELEMENT BY ID IN NESTED ARRAY. WILL BE USED LATTER IN THE EDITING PROCESS
// Test.findById(
//   questionId,
//   {
//     questions: {
//       $elemMatch: {
//         _id: '5c61d0a83a2d031a2cb7e736',
//       },
//     },
//   }).then((result) => {
//   res.send(result)
// })

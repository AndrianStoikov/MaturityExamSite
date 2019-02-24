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
  getTest: {
    get: (req, res) => {
      const testID = req.params.id

      Test.findById(testID).then((test) => {
        if (!test) {
          res.status(400).send({
            'response': 'Test could not be found.',
          })

          return
        }

        res.status(200).send({
          'response': 'Test retrieved successfully',
          test: test,
        })
      }).catch((err) => {
        console.log(err)

        res.status(500).send({
          response: 'Something went wrong',
        })
      })
    },
  },
  addTest: {
    post: (req, res) => {

      if (!req.body.name) {
        res.status(400).send({
          response: 'Provide valid test name',
        })

        return
      }

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
  deleteTest: {
    post: (req, res) => {
      const testId = req.params.id

      Test.findByIdAndRemove(testId)
        .then((test) => {
          if (!test) {
            res.status(400).send({
              response: 'Please provide correct test id',
            })

            return
          }

          res.status(200).send({
            response: 'Successfully deleted test',
            test: test,
          })
        })
        .catch((err) => {
          console.log(err)

          res.status(500).send({
            response: 'Something went wrong.',
          })
        })
    },
  },
  addQuestion: {
    post: (req, res) => {
      let questionObject = req.body
      let testID = req.params.id

      if (!questionObject.text) {

        res.status(400).send({
          response: 'Please provide correct question text',
        })

        return
      }

      if (!questionObject.possibleAnswers ||
        questionObject.possibleAnswers.length === 0) {

        res.status(400).send({
          response: 'Please provide correct possible answers',
        })

        return
      }

      Test.findById(testID).then((test) => {
        if (test == null)
          res.status(400).send({
            response: 'Please provide correct test ID',
          })

        Test.findByIdAndUpdate(testID, {$push: {questions: questionObject}},
          {new: true}).then((success) => {

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
  getQuestion: {
    get: (req, res) => {
      const testId = req.params.testId
      const questionId = req.params.questionId

      Test.findById(
        testId,
        {
          questions: {
            $elemMatch: {
              _id: questionId,
            },
          },
        }).then((result) => {
        res.status(200).send({
          response: 'Successfully retrieved questionObject',
          question: result.questions[0],
        })
      }).catch((err) => {
        res.status(500).send({
          response: 'Something went wrong',
        })

        console.log(err)
      })

    },
  },
  editQuestion: {
    post: (req, res) => {
      const questionObject = req.body

      const testId = req.params.testId
      const questionId = req.params.questionId

      Test
        .findOneAndUpdate(
          {'questions._id': questionId},
          {
            $set: {
              'questions.$.text': questionObject.text,
              'questions.$.possibleAnswers': questionObject.possibleAnswers,
              'questions.$.indexOfAnswer': questionObject.indexOfAnswer,
            },
          },
        )
        .then((test) => {

          res.status(200).send({
            response: 'Successfully updated the object',
            test: test,
          })

        }).catch((err) => {
        res.status(500).send({
          response: 'Something went wrong',
        })

        console.log(err)
      })
    },
  },
  deleteQuestion: {
    post: (req, res) => {

      const testId = req.params.testId
      const questionId = req.params.questionId

      Test
        .findOneAndUpdate(
          {'_id': testId},
          {
            $pull: {
              'questions': {'_id': questionId},
            },
          },
        )
        .then((test) => {
          res.status(200).send({
            response: 'Successfully updated the object',
            test: test,
          })

        }).catch((err) => {
        res.status(500).send({
          response: 'Something went wrong',
        })

        console.log(err)
      })
    },
  },
}

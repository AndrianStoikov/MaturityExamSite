const mongoose = require('mongoose')

const MIN_QUESTIONS_SIZE = 2

function getRequiredPropMsg (prop) {
  return `${prop} is required!`
}

function questionsLimit (arr, maxSize, minSize) {
  if (arr.length > maxSize)
    return false

  // noinspection RedundantIfStatementJS
  if (arr.length < MIN_QUESTIONS_SIZE)
    return false

  return true
}

let testSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Test name'),
  },
  questions: {
    type: [
      {
        text: {
          type: mongoose.Schema.Types.String,
          required: true,
        },
        possibleAnswers: {
          type: [mongoose.Schema.Types.String],
          required: true,
        },
        indexOfAnswer: {
          type: mongoose.Schema.Types.Number,
          required: true,
        },
      },
    ],
  },
  date: {type: Date, default: Date.now()},
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test




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
    type: [mongoose.Schema.Types.String],
    validate: [questionsLimit, '{PATH} exceeds the limit of 10'],
  },
  answer: {
    type: mongoose.Schema.Types.Number,
    required: getRequiredPropMsg('Test answer'),
  },
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test




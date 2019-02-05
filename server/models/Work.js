const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

function getRequiredPropMsg (prop) {
  return `${prop} is required!`
}

let workSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Work name')
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Work content')
  },
  analysis: {
    type: mongoose.Schema.Types.String,
    require:  getRequiredPropMsg('Work analysis')
  }
})

const Work = mongoose.model('Work', workSchema)

module.exports = Work

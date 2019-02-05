const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

function getRequiredPropMsg (prop) {
  return `${prop} is required!`
}

let lyricsWorkSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Work name')
  },
  paragraphs: {
    type: [mongoose.Schema.Types.String],
    required: getRequiredPropMsg('Work paragraphs')
  },
  analysis: {
    type: [mongoose.Schema.Types.String],
    require:  getRequiredPropMsg('Work analysis')
  }
})

const LyricsWork = mongoose.model('LyricsWork', lyricsWorkSchema)

module.exports = LyricsWork

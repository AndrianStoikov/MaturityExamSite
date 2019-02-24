const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

function getRequiredPropMsg (prop) {
  return `${prop} is required!`
}

let authorSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Author name'),
    unique: true
  },
  biography: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Author biography'),
  },
  shortBiography: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Author short biography'),
  },
  cyrillicName: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Author cyrillic name'),
    unique: true
  },
  works: {type: [mongoose.Schema.Types.ObjectId], ref: 'LyricsWork'},
  normalWorks: {type: [mongoose.Schema.Types.ObjectId], ref: 'Work'}
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author

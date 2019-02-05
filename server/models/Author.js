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
    required: getRequiredPropMsg('Author name'),
  },
  cyrillicName: {
    type: mongoose.Schema.Types.String,
    required: getRequiredPropMsg('Author cyrillic name'),
    unique: true
  },
  works: {type: [mongoose.Schema.Types.ObjectId], ref: 'LyricsWork'}
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author

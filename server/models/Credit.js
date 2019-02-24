const mongoose = require('mongoose')

function getRequiredPropMsg (prop) {
  return `${prop} is required!`
}

let creditSchema = mongoose.Schema({
  text: {
    type: mongoose.Schema.Types.String,
    require: getRequiredPropMsg('Credit Text'),
    minlength: 3,
  },
  description: {
    type: mongoose.Schema.Types.String,
  },
})

const Credit = mongoose.model('Credit', creditSchema)

module.exports = Credit

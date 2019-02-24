const Credit = require('../models/Credit')

module.exports = {
  getAllCredits: {
    get: (req, res) => {
      Credit.find()
        .then((result) => {
          res.status(200).send({
            response: 'Credits retrieved',
            credits: result,
          })
        })
    },
  },
  getCredit: {
    get: (req, res) => {
      const creditId = req.params.id

      Credit.findById(creditId)
        .then((credit) => {
          if (!credit) {
            res.status(400).send({
              response: 'Provide valid credit id',
            })

            return
          }

          res.status(200).send({
            response: 'Credit successfully retrieved',
            credit: credit,
          })
        })
        .catch((err) => {
          console.log(err)

          res.status(500).send({
            response: 'Something went wrong',
          })
        })
    },
  },
  editCredit: {
    post: (req, res) => {
      const creditId = req.params.id

      const creditObject = {
        text: req.body.text,
        description: req.body.description,
      }

      if (!creditObject.text || creditObject.text === '') {
        res.status(400).send({
          response: 'Please provide text',
        })

        return
      }

      if (!creditObject.description || creditObject.description === '') {
        res.status(400).send({
          response: 'Please provide description',
        })

        return
      }

      Credit.findByIdAndUpdate(creditId, {
          $set: {
            text: creditObject.text,
            description: creditObject.description,
          },
        },
        {new: true},
      )
        .then((credit) => {
          if (!credit) {
            res.status(400).send({
              response: 'Provide valid credit id',
            })

            return
          }

          res.status(200).send({
            response: 'Successfully updated credit',
            credit: credit,
          })
        })
        .catch((err) => {
          console.log(err)

          res.status(500).send({
            response: 'Something went wrong',
          })
        })
    },
  },
  deleteCredit: {
    post: (req, res) => {
      const creditId = req.params.id

      Credit.findByIdAndRemove(creditId)
        .then((credit) => {
          if (!credit) {
            res.status(400).send({
              response: 'Provide correct credit id',
            })

            return
          }

          res.status(200).send({
            response: 'Credit deleted successfully',
            credit: credit,
          })
        })
        .catch((err) => {
          console.log(err)

          res.status(500).send({
            response: 'Something went wrong',
          })
        })
    },
  },
  createCredit: {
    post: (req, res) => {
      const creditId = req.params.id

      const creditObject = {
        text: req.body.text,
        description: req.body.description,
      }

      if (!creditObject.text || creditObject.text === '') {
        res.status(400).send({
          response: 'Please provide text',
        })

        return
      }

      if (!creditObject.description || creditObject.description === '') {
        res.status(400).send({
          response: 'Please provide description',
        })

        return
      }

      Credit
        .create(creditObject)
        .then((credit) => {
          res.status(200).send({
            response: 'Successfully created credit',
            credit: credit,
          })
        })
        .catch((err) => {
          console.log(err)

          res.status(500).send({
            response: 'Something went wrong',
          })
        })
    },
  },
}

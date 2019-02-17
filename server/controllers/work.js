const LyricsWork = require('../models/LyricsWork')

let workTypesEditExecutioner = {
  'normal': normalEditFunction,
  'lyrics': lyricsEditFunction,
}

function parseParagraphs (string) {
  return string.split('\n')
}

function normalEditFunction (req, res) {
  res.sendStatus(200)
}

function lyricsEditFunction (req, res) {
  const workID = req.params.id

  const paragraphs = parseParagraphs(req.body.workContent)
  const analysis = parseParagraphs(req.body.workAnalysis)
  const workName = req.body.name

  LyricsWork.findByIdAndUpdate(workID,
    {$set: {name: workName, paragraphs: paragraphs, analysis: analysis}},
    {new: true}).then((updatedWork) => {
    res.status(200).send({
      response: 'Work updated successfully',
      work: updatedWork,
    })
  }).catch((err) => {
    console.log(err)

    res.status(500).send({
      response: 'Something went wrong',
    })
  })
}

module.exports = {
  getWork: {
    get: (req, res) => {
      const workID = req.params.id

      // TODO: FIND WORK WHICH IS NOT LYRICS

      LyricsWork.findById(workID).then((work) => {
        res.status(200).send(work)
      }).catch((err) => {
        console.log(err)
        res.status(500).send({
          response: 'Something went wrong',
        })
      })

    },
  },
  editWork: {
    post: (req, res) => {
      // console.log(req.body)

      let workType = req.body.workType

      let workName = req.body.name

      if (!workType) {
        res.status(400).send({
          response: 'Please provide workType',
        })

        return
      }

      if (!workName) {
        res.status(400).send({
          response: 'Please provide name',
        })

        return
      }

      workTypesEditExecutioner[workType](req, res)
    },
  },
  deleteWork: {
    post: (req, res) => {
      const workID = req.params.id
      const workType = req.body.workType

      if(workType !== 'lyrics' && workType !== 'normal') {
        res.status(400).send({
          response: "Provide valid workType"
        })

        return
      }

      if (workType === 'lyrics') {
        LyricsWork.findById(workID).remove().then((deletedWork) => {
          res.status(200).send({
            'response': 'Successfully deleted object',
            deletedWork: deletedWork,
          })
        }).catch((err) => {
          console.log(err)
          res.status(500).send({
            response: 'Something went wrong',
          })
        })

        return
      }

      if (workType === 'normal') {
        res.status(500).send({
          response: 'Not implemented yet'
        })
      }
    },
  },
}


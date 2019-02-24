const LyricsWork = require('../models/LyricsWork')
const Work = require('../models/Work')

let workTypesEditExecutioner = {
  'normal': normalEditFunction,
  'lyrics': lyricsEditFunction,
}

function parseParagraphs (string) {
  return string.split('\n')
}

function normalEditFunction (req, res) {
  const workId = req.params.id

  const workContent = req.body.workContent
  const analysis = parseParagraphs(req.body.workAnalysis)
  const workName = req.body.name

  console.log(req.body)

  Work
    .findByIdAndUpdate(workId,
      {$set: {name: workName, workContent: workContent, analysis: analysis}},
      {new: true})
    .then((updatedWork) => {
      res.status(200).send({
        response: 'Work updated successfully',
        work: updatedWork,
      })
    })
    .catch((err) => {
      console.log(err)

      res.status(500).send({
        response: 'Something went wrong',
      })
    })
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

      const workType = req.query.workType

      if (workType === 'normal') {
        Work.findById(workID).then((work) => {
          if(!work) {
            res.status(400).send({
              response: 'Provide valid work id',
            })

            return
          }


          res.status(200).send(work)
        }).catch((err) => {
          console.log(err)
          res.status(500).send({
            response: 'Something went wrong',
          })
        })

        return
      }

      if (workType === 'lyrics') {
        LyricsWork.findById(workID).then((work) => {
          if(!work) {
            res.status(400).send({
              response: 'Provide valid work id',
            })

            return
          }

          res.status(200).send(work)
        }).catch((err) => {
          console.log(err)
          res.status(500).send({
            response: 'Something went wrong',
          })
        })

        return
      }
    },
  },
  editWork: {
    post: (req, res) => {
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

      if (workType !== 'lyrics' && workType !== 'normal') {
        res.status(400).send({
          response: 'Provide valid workType',
        })

        return
      }

      if (workType === 'lyrics') {
        LyricsWork.findByIdAndRemove(workID).then((deletedWork) => {
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
        Work.findByIdAndRemove(workID)
          .then((deletedWork) => {
            if(!deletedWork) {
              res.status(400).send({
                response: 'Provide valid work id',
              })
            }

            res.status(200).send({
              'response': 'Successfully deleted object',
              deletedWork: deletedWork,
            })
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send({
              response: 'Something went wrong',
            })
          })
      }
    },
  },
}


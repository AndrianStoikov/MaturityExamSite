const Author = require('../models/Author')
const Work = require('../models/Work')
const LyricsWork = require('../models/LyricsWork')

/*
*    ADD WORK OBJECT POST FORMAT
*
*  {
*     "authorName": "никола вапцаров",
*	    "workType": "normal",
*	    "workName": "ПървоИме-ВтороИме",
*	    "workContent": "Бблалбал\\n",
*	    "workAnalysis": "blalblablal"
*	 }
*
 */

/*
*   ADD AUTHOR POST FORMAT
*
* {
*     "name": "Nikola Vapcarov"
*     "cyrillicName": "никола вапцаров",
*     "biography": "...."
*	    "works": []
*	 }
*
* */

let workTypesExecutioner = {
  'normal': normalCreateFunction,
  'lyrics': lyricsCreateFunction,
}

module.exports = {
  getAllAuthors: {
    get: (req, res) => {
      Author.find({}).then((authors) => {
        res.status(200).send({
          'response': 'Authors found successfully',
          authors: authors,
        })
      })
    },
  },
  allAuthors: {
    get: (req, res) => {
      Author.find({}).populate('works').then(authors => {
        res.status(200).send(authors)
      })
    },
  },
  getAuthor: {
    get: (req, res) => {
      let name = splitStringAndMakeItWithUpperCase(req.params.name, '-')

      Author.findOne({name: name})
        .populate({path: 'works', model: 'LyricsWork'})
        .populate({path: 'normalWorks', model: 'Work'})
        .then(author => {
          if (!author) {
            res.status(400).send({
              response: 'Author not found',
            })

            return
          }

          if (author.length === 0) {
            res.status(400).send({
              response: 'Author not found',
            })

            return
          }

          res.status(200).send({
            response: 'Author found',
            author: author,
          })
        })
        .catch(err => {

          console.log(err)

          res.status(500).send({
            'response': 'Something went wrong.',
          })
        })
    },
  },
  addAuthor: {
    post: (req, res) => {
      let data = req.body

      let authorData = {
        name: data.name,
        cyrillicName: data.cyrillicName,
        biography: data.biography,
        shortBiography: data.shortBiography,
        works: [],
      }

      Author.create(authorData).then(author => {
        res.status(201).send({
          response: 'New author created.',
          author: author,
        })
      }).catch(err => {
        if (err.code === 11000) {
          res.status(409).send({
            response: 'Author with that name already exists.',
          })

          return
        }

        if (err.name === 'ValidationError') {
          res.status(409).send({
            response: err.message,
          })
        } else {
          res.status(500).send({
            response: 'Something went wrong.',
          })

          console.log(err)
        }
      })
    },
  },
  editAuthor: {
    post: (req, res) => {

      let authorName = splitStringAndMakeItWithUpperCase(req.params.name, '-')
      let authorData = req.body

      let authorObject = {
        name: authorData.name,
        cyrillicName: authorData.cyrillicName,
        biography: authorData.biography,
        shortBiography: authorData.shortBiography,
      }

      Author.findOneAndUpdate({name: authorName}, {
        $set: {
          name: authorObject.name,
          cyrillicName: authorObject.cyrillicName,
          biography: authorObject.biography,
          shortBiography: authorObject.shortBiography,
        },
      }, {new: true}).then((updatedAuthor) => {
        res.status(200).send({
          response: 'Author information successfully updated.',
          author: updatedAuthor,
        })
      }).catch((err) => {

        if (err.code === 11000) {
          res.status(500).send({
            response: 'You are probably trying to edit the wrong author with a name that already exists',
            error: err,
          })

          return
        }

        res.status(500).send({
          response: 'Something went wrong.',
          error: err,
        })
      })
    },
  },
  addWork: {
    post: (req, res) => {
      let workType = req.body.workType

      if (!workType || !workTypesExecutioner[workType]) {
        res.status(400).send({
          response: 'Invalid work type. Please provide valid work type: normal or lyrics',
        })

        return
      }

      workTypesExecutioner[workType](req, res)
    },
  },
}

function normalCreateFunction (req, res) {
  let authorID = req.params.id
  let content = req.body.workContent
  let workName = req.body.name
  let workAnalysis = req.body.workAnalysis

  let workObject = {
    name: workName,
    workContent: content,
    analysis: parseParagraphs(workAnalysis),
  }

  Author.findById(authorID).then(author => {
    if (!author) {
      res.status(400).send({
        'response': 'Please provide valid author ID.',
      })

      return
    }

    Work.create(workObject).then(createdWork => {
      author.normalWorks.push(createdWork._id)

      author.save().then((author) => {
        res.status(200).send({
          'response': 'New work saved successfully.',
          'normalWork': createdWork,
        })
      }).catch(err => {
        console.log(err)
      })
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).send({
      'response': 'Something went wrong',
    })
  })
}

function lyricsCreateFunction (req, res) {
  let authorID = req.params.id

  let workName = req.body.name
  let workContent = req.body.workContent
  let workAnalysis = req.body.workAnalysis


  Author.findById(authorID).then(author => {
    let paragraphs = parseParagraphs(workContent)

    let workObject = {
      name: workName,
      paragraphs: paragraphs,
      analysis: parseParagraphs(workAnalysis),
    }

    if (!author) {
      res.status(400).send({
        'response': 'Please provide valid author ID.',
      })

      return
    }

    LyricsWork.create(workObject).then(createdWork => {
      author.works.push(createdWork._id)

      author.save().then((author) => {
        res.status(200).send({
          'response': 'New work saved successfully.',
          'work': createdWork,
        })
      }).catch(err => {
        console.log(err)
      })
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).send({
      'response': 'Something went wrong',
    })
  })
}

function parseParagraphs (string) {
  return string.split('\n')
}

function makeStringWithFirstUpperLetter (string) {
  return string[0].toUpperCase() + string.substr(1).toLowerCase()
}

function splitStringAndMakeItWithUpperCase (name, separator) {
  if (!separator) {
    throw new SyntaxError('Separator must be provided for the function')
  }

  let splitString = name.split(separator)

  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = makeStringWithFirstUpperLetter(splitString[i])
  }

  return splitString.join(' ')
}

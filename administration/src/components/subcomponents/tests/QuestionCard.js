import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

export default class QuestionCard extends Component {
  parseAnswers () {
    let answers = []

    if (!this.props.possibleAnswers)
      return

    for (let i = 0; i < this.props.possibleAnswers.length; i++) {
      let answer = this.props.possibleAnswers[i]

      answers.push(
        <div style={{whiteSpace: 'pre-line'}} key={i}>
          {answer}
        </div>,
      )
    }

    return answers
  }

  transform (node) {
    // do not render any tag different from <u>
    console.log(node)

    if (node.type === 'tag' && node.name !== 'u') {
      console.log(node)
      return null
    }
  }

  // TODO: IF THERE ARE MULTIPLE <u>text</u> the whole line is underlined
  // TODO: Decide if this functions is going to parse other characters different that <u></u> and blank space
  parseStringForSpecialStylization (string) {
    let regexForBlankSpace = / +[^ ]{0}/

    let blankSpaceMatches = string.match(regexForBlankSpace)

    if (!blankSpaceMatches || blankSpaceMatches.index !== 0)
      blankSpaceMatches = []

    let blankSpaceElements = []

    if (blankSpaceMatches[0])
      for (let i = 0; i < blankSpaceMatches[0].length; i++) {
        blankSpaceElements.push(<span key={i}>&nbsp;</span>)
      }

    string = string.trim()

    return <div>
      {blankSpaceElements}
      {ReactHtmlParser(string)}
    </div>
  }

  parseQuestionText () {
    let regex = /\n/gm

    if (!regex.test(this.props.text)) {
      return <h4
        className="menu-title font-alt">{this.parseStringForSpecialStylization(
        this.props.text)}</h4>
    }

    let questionLines = []
    let matches = this.props.text.split(regex)

    for (let i = 0; i < matches.length - 1; i++) {
      questionLines.push(
        <h4 style={{margin: 0}} className="menu-title font-alt"
            key={i}>{this.parseStringForSpecialStylization(matches[i])}</h4>,
      )
    }

    questionLines.push(
      <h4 style={{margin: '0 0 10px 0'}} className="menu-title font-alt"
          key={matches.length - 1}>{this.parseStringForSpecialStylization(
        matches[matches.length - 1])}</h4>,
    )

    return questionLines
  }

  getAnswer () {
    let arrOfAnswerLetter = ['А', 'Б', 'В', 'Г']

    return `Верен отговор: ${arrOfAnswerLetter[this.props.indexOfAnswer]}`
  }

  render () {
    return (
      <div className="menu" style={{marginRight: '40px'}}>
        <div className="row">
          <div className="col-sm-9" style={{paddingRight: '25px'}}>
            {this.parseQuestionText()}

            <div className="menu-detail font-serif"
                 style={{fontSize: '14px'}}>

              {this.parseAnswers()}

            </div>
          </div>

          <div className="col-sm-3 menu-price-detail">
            <h4 className="menu-price font-alt" style={{fontSize: '13px'}}>
              <strong>{this.getAnswer()}</strong></h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className="menu-detail font-serif"
                 style={{margin: '25px 0px 15px 0'}}>
              <Link
                className='btn btn-success'
                to={`/administration/question/edit/${this.props.questionID}?testID=${this.props.testID}`}
                style={{padding: '4px'}}
              >
                Редактирай
              </Link>

              <Link
                className='btn btn-danger'
                to={`/administration/question/delete/${this.props.questionID}?testID=${this.props.testID}`}
                style={{marginLeft: '15px', padding: '4px'}}
              >
                Изтрии
              </Link>
            </div>
          </div>

          <hr/>
        </div>
      </div>
    )
  }
}

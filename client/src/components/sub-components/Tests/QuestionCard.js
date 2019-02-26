import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

export default class QuestionCard extends Component {

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

  parseQuestionText (string) {
    let regex = /\n/gm

    let questionStyle = {
      fontSize: '18px',
      color: '#404b66'
    }

    if(this.props.question.shouldBeChecked && (this.props.question.checkedAnswer === '')) {
      questionStyle = {
        fontSize: '18px',
        'color' : 'red'
      }
    }

    if (!regex.test(string)) {
      return <h4 className="menu-title font-alt" style={questionStyle}>{string}</h4>
    }

    let questionLines = []
    let matches = string.split(regex)

    for (let i = 0; i < matches.length - 1; i++) {
      questionLines.push(
        <h4 style={{margin: 0, color: questionStyle.color}} key={i}>{this.parseStringForSpecialStylization(
          matches[i])}</h4>,
      )
    }

    questionLines.push(
      <h4 style={{margin: '0 0 10px 0', color: questionStyle.color}}
          key={matches.length - 1}>{this.parseStringForSpecialStylization(
        matches[matches.length - 1])}</h4>,
    )

    return questionLines
  }

  generateAnswers () {
    let answers = []

    const rightAnswer = this.props.question.possibleAnswers[this.props.question.indexOfAnswer]

    for (let i = 0; i < this.props.question.possibleAnswers.length; i++) {
      const possibleAnswer = this.props.question.possibleAnswers[i]

      const displayClickedAnswer = this.props.question.checkedAnswer ===
      possibleAnswer ? 'block' : 'none'

      const displayRightAnswer = this.props.question.shouldBeChecked
        ? 'block'
        : 'none'

      let circle = (
        <span style={{
          content: '',
          display: displayClickedAnswer,
          position: 'absolute',
          top: '2px',
          right: '2px',
          bottom: '2px',
          left: '2px',
          background: '#ff5c72',
          borderRadius: '50%',
        }}/>
      )


      let textStyle = {
        fontSize: '18px',
        color: '#2c3447'
      }

      if (this.props.question.shouldBeChecked &&
        (possibleAnswer === rightAnswer)) {
        circle = (
          <span style={{
            content: '',
            display: displayRightAnswer,
            position: 'absolute',
            top: '2px',
            right: '2px',
            bottom: '2px',
            left: '2px',
            background: 'green',
            borderRadius: '50%',
          }}/>
        )

        textStyle = {
          fontSize: '18px',
          color: 'green'
        }
      }

      if (this.props.question.shouldBeChecked && (this.props.question.checkedAnswer === possibleAnswer) && (possibleAnswer !== rightAnswer)) {
        textStyle = {
          fontSize: '18px',
          color: 'red'
        }
      }

      answers.push(
        <label className="radio-btn calculator__radio-btn"
               style={{display: 'block'}} key={i}>
          <input className="radio-btn__radio"
                 type="radio"
                 value={possibleAnswer}
                 name="question"
                 onChange={this.props.handleChange.bind(null,
                   this.props.question._id, possibleAnswer, i)}
                 disabled={this.props.question.shouldBeChecked}
          />
          <span className="radio-btn__radio-custom">
             {circle}
          </span>
          <span className="radio-btn__label" style={textStyle}>
            {possibleAnswer}
          </span>
        </label>,
      )
    }

    return answers
  }

  render () {
    return (
      <div>
        <div
          style={{
            marginTop: '70px',
            marginBottom: '15px',
          }}
        >
          {this.parseQuestionText(this.props.question.text)}
        </div>

        <div className="form__form-group">
          {this.generateAnswers()}
        </div>

      </div>
    )
  }
}

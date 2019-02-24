import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import { Link } from 'react-router-dom'
import TextGroup from '../../components/form/TextGroup'
import TextArea from '../../components/form/TextArea'
import QuestionEditActions from '../../actions/questions/QuestionEditActions'
import Submit from '../../components/form/Submit'
import QuestionEditStore from '../../stores/questions/QuestionEditStore'
import SelectGroup from '../../components/form/SelectGroup'

const queryString = require('query-string')

export default class QuestionEdit extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = QuestionEditStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    QuestionEditStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const parsedSearch = queryString.parse(this.props.location.search)

    const questionID = this.props.match.params.id
    const testID = parsedSearch.testID

    QuestionEditActions.getQuestion(testID, questionID)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    QuestionEditStore.unlisten(this.onChange)
  }

  isValidInput () {
    if (this.state.question.length < 3) {
      QuestionEditActions.questionValidationFail('Question cannot be less than 3 symbols')
      return false
    }

    if (this.state.firstAnswer.length < 3) {
      QuestionEditActions.firstAnswerValidationFail('First answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.secondAnswer.length < 3) {
      QuestionEditActions.secondAnswerValidationFail('Second answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.thirdAnswer.length < 3) {
      QuestionEditActions.thirdAnswerValidationFail('Third answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.forthAnswer.length < 3) {
      QuestionEditActions.forthAnswerValidationFail('Fourth answer cannot be less than 3 symbols')
      return false
    }

    if (this.state.indexOfAnswer === -1 || this.state.indexOfAnswer === 4) {
      QuestionEditActions.rightAnswerValidationFail('Please select answer of the question')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isValidInput())
      return

    let questionObject = {
      text: this.state.question,
      possibleAnswers: [
        this.state.firstAnswer,
        this.state.secondAnswer,
        this.state.thirdAnswer,
        this.state.forthAnswer,
      ],
      indexOfAnswer: this.state.indexOfAnswer,
    }

    const parsedSearch = queryString.parse(this.props.location.search)

    const questionID = this.props.match.params.id
    const testID = parsedSearch.testID

    QuestionEditActions.editQuestion(testID, questionID, questionObject)
      .then(() => {
        this.props.history.push(`/administration/tests/edit/${testID}`)
      })
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  render () {
    const parsedSearch = queryString.parse(this.props.location.search)

    return (
      <div>
        <DarkBackgroundWithText
          text={'Тук се показва въпроса, който искате да редактирате'}
          smallText={'Може да се откажете от това като натиснете Cancel'}/>

        <section className='module'>
          <div className='container'>
            <div className="row">
              <div className="col-sm-2 col-sm-offset-5">
                <div className="alt-module-subtitle">
                  <span className="holder-w"/>
                  <h5 className="font-serif">Въпроси</h5>
                  <span className="holder-w"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="module-title font-alt">РЕДАКТИРАЙ ВЪПРОСА</h2>
              </div>
            </div>

            <hr className='divider-w'/>

            <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
              <h4 style={{textAlign: 'center'}}>{'За да оформите текста може да се използват специалнитете HTML тагове като <u> </u> или <i> </i>'}</h4>
              <h4 style={{textAlign: 'center'}}>{'Пример: <u>Текст</u> -> '} <u>Текст</u></h4>

              <hr className='divider-w'/>

              <Form
                title='СЪЗДАЙ ВЪПРОС'
                handleSubmit={this.handleSubmit.bind(this)}
                message={this.state.message}
                validationState={this.state.formSubmitState}>

                <TextArea
                  type='text'
                  value={this.state.question}
                  label='ВЪПРОС'
                  handleChange={QuestionEditActions.handleQuestionChange}
                  validationState={this.state.questionValidationState}
                  customStyle={{height: '150px', textTransform: 'none'}}
                />

                <TextGroup
                  type='text'
                  value={this.state.firstAnswer}
                  label='ПЪРВИ ОТГОВОР'
                  handleChange={QuestionEditActions.handleFirstAnswerChange}
                  validationState={this.state.firstAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.secondAnswer}
                  label='ВТОРИ ОТГОВОР'
                  handleChange={QuestionEditActions.handleSecondAnswerChange}
                  validationState={this.state.secondAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.thirdAnswer}
                  label='ТРЕТИ ОТГОВОР'
                  handleChange={QuestionEditActions.handleThirdAnswerChange}
                  validationState={this.state.thirdAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.forthAnswer}
                  label='ЧЕТЪРТИ ОТГОВОР'
                  handleChange={QuestionEditActions.handleForthAnswerChange}
                  validationState={this.state.forthAnswerValidationState}
                />


                <SelectGroup
                  options={[
                    this.state.firstAnswer,
                    this.state.secondAnswer,
                    this.state.thirdAnswer,
                    this.state.forthAnswer]}
                  handleChange={QuestionEditActions.handleAnswerChange}
                  placeholder={'Правилният отговор на теста'}
                  label={this.state.answerAsText}
                />

                <Submit
                  type='btn-round btn-b'
                  value='Редактирай'/>

                <Link
                  to={`/administration/tests/edit/${parsedSearch.testID}`}
                  className='btn btn-warning'>Cancel</Link>
              </Form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

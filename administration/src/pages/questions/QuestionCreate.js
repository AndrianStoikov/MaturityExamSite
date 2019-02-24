import React from 'react'
import { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import CreateQuestionActions from '../../actions/questions/QuestionCreateActions'
import TextGroup from '../../components/form/TextGroup'
import Submit from '../../components/form/Submit'
import QuestionCreateStore from '../../stores/questions/QuestionCreateStore'
import SelectGroup from '../../components/form/SelectGroup'
import { Link } from 'react-router-dom'
import TextArea from '../../components/form/TextArea'

// TODO: Implement field validation and error handling. Add special guide to underlining words in the text
export default class QuestionCreate extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = QuestionCreateStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    QuestionCreateStore.listen(this.onChange)

    window.scrollTo(0, 0)

  }

  componentWillUnmount () {
    QuestionCreateStore.unlisten(this.onChange)
  }

  isValidInput () {
    if (this.state.question.length < 3) {
      CreateQuestionActions.questionValidationFail('Question cannot be less than 3 symbols')
      return false
    }

    if (this.state.firstAnswer.length < 3) {
      CreateQuestionActions.firstAnswerValidationFail('First answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.secondAnswer.length < 3) {
      CreateQuestionActions.secondAnswerValidationFail('Second answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.thirdAnswer.length < 3) {
      CreateQuestionActions.thirdAnswerValidationFail('Third answer cannot be less than 3 symbols')
      return false
    }
    if (this.state.forthAnswer.length < 3) {
      CreateQuestionActions.forthAnswerValidationFail('Fourth answer cannot be less than 3 symbols')
      return false
    }

    if (this.state.indexOfAnswer === -1 || this.state.indexOfAnswer === 4) {
      CreateQuestionActions.rightAnswerValidationFail('Please select answer of the question')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isValidInput())
      return

    let arrOfPossibleAnswers = []
    arrOfPossibleAnswers.push(this.state.firstAnswer)
    arrOfPossibleAnswers.push(this.state.secondAnswer)
    arrOfPossibleAnswers.push(this.state.thirdAnswer)
    arrOfPossibleAnswers.push(this.state.forthAnswer)

    let questionObject = {
      text: this.state.question.trim(),
      possibleAnswers: arrOfPossibleAnswers.map(a => a.trim()),
      indexOfAnswer: this.state.indexOfAnswer,
    }

    const testID = this.props.match.params.id

    CreateQuestionActions.createQuestion(questionObject, testID).then(() => {
      this.props.history.push(`/administration/tests/edit/${testID}`)
    })
  }

  render () {
    return (
      <div>
        <DarkBackgroundWithText
          text={'От тук може да добивите нов въпрос към теста'}
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
                <h2 className="module-title font-alt">СЪЗДАЙ ВЪПРОС</h2>
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
                  handleChange={CreateQuestionActions.handleQuestionChange}
                  validationState={this.state.questionValidationState}
                  customStyle={{height: '150px', textTransform: 'none'}}
                />

                <TextGroup
                  type='text'
                  value={this.state.firstAnswer}
                  label='ПЪРВИ ОТГОВОР'
                  handleChange={CreateQuestionActions.handleFirstAnswerChange}
                  validationState={this.state.firstAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.secondAnswer}
                  label='ВТОРИ ОТГОВОР'
                  handleChange={CreateQuestionActions.handleSecondAnswerChange}
                  validationState={this.state.secondAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.thirdAnswer}
                  label='ТРЕТИ ОТГОВОР'
                  handleChange={CreateQuestionActions.handleThirdAnswerChange}
                  validationState={this.state.thirdAnswerValidationState}
                />

                <TextGroup
                  type='text'
                  value={this.state.forthAnswer}
                  label='ЧЕТЪРТИ ОТГОВОР'
                  handleChange={CreateQuestionActions.handleForthAnswerChange}
                  validationState={this.state.forthAnswerValidationState}
                />


                <SelectGroup
                  options={[
                    this.state.firstAnswer,
                    this.state.secondAnswer,
                    this.state.thirdAnswer,
                    this.state.forthAnswer]}
                  handleChange={CreateQuestionActions.handleAnswerChange}
                  label='Правилен отговор'
                  validationState={this.state.rightAnswerValidationState}
                />

                <Submit
                  type='btn-round btn-b'
                  value='Създай'/>

                <Link
                  to={`/administration/tests/edit/${this.props.match.params.id}`}
                  className='btn btn-warning'>Cancel</Link>
              </Form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

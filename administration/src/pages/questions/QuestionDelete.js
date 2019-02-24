import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import QuestionDeleteActions from '../../actions/questions/QuestionDeleteActions'
import { Link } from 'react-router-dom'
import TextArea from '../../components/form/TextArea'
import TextGroup from '../../components/form/TextGroup'
import SelectGroup from '../../components/form/SelectGroup'
import Submit from '../../components/form/Submit'
import QuestionDeleteStore from '../../stores/questions/QuestionDeleteStore'
import QuestionEditActions from '../../actions/questions/QuestionEditActions'

const queryString = require('query-string')

export default class QuestionDelete extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = QuestionDeleteStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    QuestionDeleteStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const parsedSearch = queryString.parse(this.props.location.search)

    const questionID = this.props.match.params.id
    const testID = parsedSearch.testID

    QuestionDeleteActions.getQuestion(testID, questionID)

  }

  componentWillUnmount () {
    QuestionDeleteStore.unlisten(this.onChange)
  }

  handleSubmit (e) {
    e.preventDefault()

    const parsedSearch = queryString.parse(this.props.location.search)

    const questionID = this.props.match.params.id
    const testID = parsedSearch.testID

    QuestionDeleteActions.deleteQuestion(testID, questionID).then((success) => {
      console.log('Success')
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
          text={'Тук се показва въпроса, който искате да изтриете'}
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
                <h2 className="module-title font-alt">ИЗТРИЙ ВЪПРОСА</h2>
              </div>
            </div>

            <hr className='divider-w'/>

            <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
              <Form
                title='ИЗТРИИЙ ВЪПРОС'
                handleSubmit={this.handleSubmit.bind(this)}
                message={this.state.message}
                validationState={this.state.formSubmitState}>

                <TextArea
                  type='text'
                  value={this.state.question}
                  label='ВЪПРОС'
                  validationState={this.state.questionValidationState}
                  customStyle={{height: '150px', textTransform: 'none'}}
                  readOnly={true}
                />

                <TextGroup
                  type='text'
                  value={this.state.firstAnswer}
                  label='ПЪРВИ ОТГОВОР'
                  validationState={this.state.firstAnswerValidationState}
                  readOnly={true}
                />

                <TextGroup
                  type='text'
                  value={this.state.secondAnswer}
                  label='ВТОРИ ОТГОВОР'
                  validationState={this.state.secondAnswerValidationState}
                  readOnly={true}
                />

                <TextGroup
                  type='text'
                  value={this.state.thirdAnswer}
                  label='ТРЕТИ ОТГОВОР'
                  validationState={this.state.thirdAnswerValidationState}
                  readOnly={true}
                />

                <TextGroup
                  type='text'
                  value={this.state.forthAnswer}
                  label='ЧЕТЪРТИ ОТГОВОР'
                  handleChange={QuestionEditActions.handleForthAnswerChange}
                  validationState={this.state.forthAnswerValidationState}
                  readOnly={true}
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
                  readOnly={true}
                />

                <Submit
                  type='btn-round btn-danger'
                  value='Изтрий'/>

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

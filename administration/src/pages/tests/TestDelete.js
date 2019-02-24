import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import TestCreateActions from '../../actions/tests/TestCreateActions'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import TextGroup from '../../components/form/TextGroup'
import Submit from '../../components/form/Submit'
import TestDeleteStore from '../../stores/tests/TestDeleteStore'
import TestDeleteActions from '../../actions/tests/TestDeleteActions'

export default class TestDelete extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = TestDeleteStore.getState()
  }

  componentWillMount () {
    TestDeleteStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const testID = this.props.match.params.id

    TestDeleteActions.getTest(testID)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    TestDeleteStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleSubmit (e) {
    e.preventDefault()

    const testId = this.props.match.params.id

    TestDeleteActions.deleteTest(testId)
      .then(() => {
        this.props.history.push(
          `/administration/tests`
        )
      })
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  render () {
    return (
      <div>
        <DarkBackgroundWithText text={'От тук може да създадете нов тест'}
                                smallText={'Ако искате да се откажете натиснете бутона Cancel'}/>

        <section className="module ">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Изтриите теста'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  validationState={this.state.formSubmitState}
                >

                  <TextGroup
                    type='text'
                    value={this.state.test.name}
                    label='ИМЕ'
                    handleChange={TestCreateActions.handleNameChange}
                    validationState={this.state.nameValidationState}
                    readOnly={true}
                  />

                  <Submit
                    type='btn-round btn-d'
                    value='Изтриите теста'/>

                  <Link to={`/administration/tests`}
                        className='btn btn-warning'>Cancel</Link>

                </Form>
              </div>
            </div>

            <div style={{height: '250px'}}>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import { Link } from 'react-router-dom'
import TextGroup from '../../components/form/TextGroup'
import Submit from '../../components/form/Submit'
import TestCreateStore from '../../stores/tests/TestCreateStore'
import TestCreateActions from '../../actions/tests/TestCreateActions'

export default class TestCreate extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = TestCreateStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    TestCreateStore.listen(this.onChange)

    window.scrollTo(0, 0)
  }

  componentWillUnmount () {
    TestCreateStore.unlisten(this.onChange)
  }

  isValidContent () {
    if (this.state.test.name === '') {
      TestCreateActions.nameValidationFail('Моля въведете правилно име')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isValidContent())
      return

    TestCreateActions.createTest(this.state.test).catch((err) => {
      this.props.history.push(
        `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
    })
  }

  render () {
    return (
      <div>
        <DarkBackgroundWithText text={'От тук може да създадете нов тест'}
                                smallText={'Ако искате да се откажете натиснете бутона Cancel'}/>

        <section className="module " style={this.defaultModuleStyle}>
          <div className="container">

            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Добавете нов тест'
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
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Създайте нов тест'/>

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

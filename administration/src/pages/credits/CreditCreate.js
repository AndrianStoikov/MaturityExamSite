import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import Submit from '../../components/form/Submit'
import TextArea from '../../components/form/TextArea'
import TextGroup from '../../components/form/TextGroup'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import CreditCreateStore from '../../stores/credits/CreditCreateStore'
import CreditsCreateActions from '../../actions/credits/CreditsCreateActions'


export default class CreditCreate extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = CreditCreateStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    CreditCreateStore.listen(this.onChange)

    window.scrollTo(0, 0)

  }

  componentWillUnmount () {
    CreditCreateStore.unlisten(this.onChange)
  }

  isValidContent () {
    if(this.state.credit.text.length === 0) {
      CreditsCreateActions.textValidationFail('Text cannot be empty')
      return false
    }

    if(this.state.credit.description.length === 0) {
      CreditsCreateActions.textValidationFail('Description cannot be empty')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isValidContent())
      return

    let creditObject = {
      text: this.state.credit.text,
      description: this.state.credit.description
    }

    CreditsCreateActions.createCredit(creditObject).then(() => {
      this.props.history.push(
        `/administration/credits`)
    }).catch((err) => {
      this.props.history.push(
        `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
    })
  }

  render () {
    return (
      <div>
        <DarkBackgroundWithText text={'От тук можете да създадете нов материал'}
                                smallText={'Може да се откажете от бутона Cancel'}/>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Създайте материал'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  submitState={this.state.formSubmitState}
                >

                  <TextGroup
                    type='text'
                    value={this.state.credit.text}
                    label='Линк/Сърдържание'
                    handleChange={CreditsCreateActions.handleTextChange}
                    validationState={this.state.textValidationState}
                  />

                  <TextArea
                    type={'text'}
                    label={'Описание на материала'}
                    value={this.state.credit.description}
                    handleChange={CreditsCreateActions.handleDescriptionChange}
                    validationState={this.state.descriptionValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Създайте нов материал'/>

                  <Link to={`/administration/credits`}
                        className='btn btn-warning'>Cancel</Link>

                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

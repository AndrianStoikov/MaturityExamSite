import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import Submit from '../../components/form/Submit'
import TextArea from '../../components/form/TextArea'
import TextGroup from '../../components/form/TextGroup'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import CreditsEditStore from '../../stores/credits/CreditsEditStore'
import CreditsEditActions from '../../actions/credits/CreditsEditActions'


export default class CreditsEdit extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = CreditsEditStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    CreditsEditStore.listen(this.onChange)

    const creditId = this.props.match.params.id

    CreditsEditActions.getCredit(creditId)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    CreditsEditStore.unlisten(this.onChange)
  }

  isValidContent () {
    if(this.state.credit.text.length === 0) {
      CreditsEditActions.textValidationFail('Text cannot be empty')
      return false
    }

    if(this.state.credit.description.length === 0) {
      CreditsEditActions.textValidationFail('Description cannot be empty')
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

    const creditId = this.props.match.params.id

    CreditsEditActions.editCredit(creditId, creditObject).then(() => {
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
        <DarkBackgroundWithText text={'От тук можете да редактирате материал'}
                                smallText={'Може да редактирате или да се откажете'}/>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Редактирайте материал'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  submitState={this.state.formSubmitState}
                >

                  <TextGroup
                    type='text'
                    value={this.state.credit.text}
                    label='Линк/Сърдържание'
                    handleChange={CreditsEditActions.handleTextChange}
                    validationState={this.state.textValidationState}
                  />

                  <TextArea
                    type={'text'}
                    label={'Описание на материала'}
                    value={this.state.credit.description}
                    handleChange={CreditsEditActions.handleDescriptionChange}
                    validationState={this.state.descriptionValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Редактирайте материала'/>

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

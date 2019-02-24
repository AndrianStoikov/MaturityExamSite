import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import Submit from '../../components/form/Submit'
import TextArea from '../../components/form/TextArea'
import TextGroup from '../../components/form/TextGroup'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import CreditsDeleteStore from '../../stores/credits/CreditsDeleteStore'
import CreditsDeleteActions from '../../actions/credits/CreditsDeleteActions'


export default class CreditsDelete extends Component {
  constructor (props) {
    super(props)

    this.state = CreditsDeleteStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    CreditsDeleteStore.listen(this.onChange)

    const creditId = this.props.match.params.id

    CreditsDeleteActions.getCredit(creditId)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    CreditsDeleteStore.unlisten(this.onChange)
  }

  handleSubmit (e) {
    e.preventDefault()


    const creditId = this.props.match.params.id

    CreditsDeleteActions.deleteCredit(creditId).then(() => {
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
                    handleChange={CreditsDeleteActions.handleTextChange}
                    validationState={this.state.textValidationState}
                    readOnly={true}
                  />

                  <TextArea
                    type={'text'}
                    label={'Описание на материала'}
                    value={this.state.credit.description}
                    handleChange={CreditsDeleteActions.handleDescriptionChange}
                    validationState={this.state.descriptionValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                    readOnly={true}
                  />

                  <Submit
                    type='btn-round btn-danger'
                    value='Изтриите материала'/>

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

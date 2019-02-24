import React, { Component } from 'react'
import EditStore from '../../stores/works/EditStore'
import EditActions from '../../actions/works/EditActions'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import Submit from '../../components/form/Submit'
import TextArea from '../../components/form/TextArea'
import TextGroup from '../../components/form/TextGroup'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import RadioElement from '../../components/form/RadioElement'

const queryString = require('query-string')

export default class WorkEdit extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = EditStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    EditStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const searchObject = queryString.parse(this.props.location.search)

    EditActions.getWork(this.props.match.params.id, searchObject.workType)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    EditStore.unlisten(this.onChange)
  }

  isContentValid () {
    if (this.state.work.name === '') {
      EditActions.nameValidationFail('Work name cannot be empty')

      return false
    }

    if (this.state.work.workContent === '') {
      EditActions.contentValidationFail('Content cannot be empty')

      return false
    }

    if (this.state.work.workAnalysis === '') {
      EditActions.analysisValidationFail('Analysis cannot be empty')

      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isContentValid())
      return

    let workObject = {
      workContent: this.state.work.workContent,
      workAnalysis: this.state.work.workAnalysis,
      workType: this.state.work.workType,
      name: this.state.work.name,
    }

    let id = this.props.match.params.id

    EditActions.editWork(id, workObject).then(() => {
      const searchObject = queryString.parse(this.props.location.search)

      this.props.history.push(
        `/administration/authors/${searchObject.authorName}`)
    }).catch((err) => {
      this.props.history.push(
        `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
    })
  }

  render () {
    const searchObject = queryString.parse(this.props.location.search)

    return (
      <div>
        <DarkBackgroundWithText
          text={'Тук се показва произведението за редакция'}
          smallText={'Може да редактирте или да се откажете'}/>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Редактирай текст'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  validationState={this.state.formSubmitState}
                >

                  <TextGroup
                    type='text'
                    value={this.state.work.name}
                    label='ИМЕ'
                    handleChange={EditActions.handleNameChange}
                    validationState={this.state.nameValidationState}
                  />

                  <TextArea
                    type={'text'}
                    label={'Съдържание/Линк'}
                    value={this.state.work.workContent}
                    handleChange={EditActions.handleContentChange}
                    validationState={this.state.contentValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <TextArea
                    type='text'
                    value={this.state.work.workAnalysis}
                    label='Анализ'
                    handleChange={EditActions.handleAnalysisChange}
                    validationState={this.state.analysisValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <div>
                    <h3 style={{color: 'red'}}>Вида на тескта не може да бъде
                      променян</h3>
                    <h3 style={{color: 'red'}}>Ако искате да го направите от
                      друг тип ще трябва да го изтриете и да създадете ново</h3>
                  </div>

                  <RadioElement
                    groupName='workType'
                    value={`Произведение като текст`}
                    handleChange={EditActions.handleLyricsWorkChange}
                    selectedValue={this.state.workType}
                    customStyle={{display: 'block'}}
                  />
                  <RadioElement
                    groupName='workType'
                    value={`Произведение като линк`}
                    handleChange={EditActions.handleLyricsWorkChange}
                    selectedValue={this.state.workType}
                    customStyle={{
                      marginLeft: 0,
                      paddingBottom: 10 + 'px',
                      display: 'block',
                    }}
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Редактирайте произведението'/>

                  <Link
                    to={`/administration/authors/${searchObject.authorName}`}
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

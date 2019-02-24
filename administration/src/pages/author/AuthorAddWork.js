import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import TextGroup from '../../components/form/TextGroup'
import TextArea from '../../components/form/TextArea'
import RadioElement from '../../components/form/RadioElement'
import Submit from '../../components/form/Submit'
import AuthorAddWorkStore from '../../stores/authors/AuthorAddWorkStore'
import AuthorAddWorkActions from '../../actions/authors/AuthorAddWorkActions'

const queryString = require('query-string')

export default class AuthorAddWork extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = AuthorAddWorkStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    AuthorAddWorkStore.listen(this.onChange)

    window.scrollTo(0, 0)
  }

  componentWillUnmount () {
    AuthorAddWorkStore.unlisten(this.onChange)
  }

  isContentValid () {
    if (this.state.work.name === '') {
      AuthorAddWorkActions.nameValidationFail('Work name cannot be empty')

      return false
    }

    if (this.state.work.workContent === '' ) {
      AuthorAddWorkActions.contentValidationFail('Content cannot be empty')

      return false
    }

    if (this.state.work.workAnalysis === '' ) {
      AuthorAddWorkActions.analysisValidationFail('Analysis cannot be empty')

      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isContentValid())
      return

    const authorId = this.props.match.params.id

    const parsedSearch  = queryString.parse(this.props.location.search)

    console.log(this.state.work)

    AuthorAddWorkActions
      .createWork(authorId, this.state.work)
      .then(() => {
        this.props.history.push(`/administration/authors/${parsedSearch.authorName}`)
      })
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  render () {
    const parsedSearch  = queryString.parse(this.props.location.search)


    return (
      <div>
        <DarkBackgroundWithText text={'Тук може да създадете ново произведение'}
                                smallText={'Може да редактирте или да се откажете'}/>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Създай нов текст'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  validationState={this.state.formSubmitState}
                >


                  <TextGroup
                    type='text'
                    value={this.state.work.name}
                    label='ИМЕ'
                    handleChange={AuthorAddWorkActions.handleNameChange}
                    validationState={this.state.nameValidationState}
                  />

                  <TextArea
                    type={'text'}
                    label={'Съдържание/Линк'}
                    value={this.state.work.workContent}
                    handleChange={AuthorAddWorkActions.handleContentChange}
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
                    handleChange={AuthorAddWorkActions.handleAnalysisChange}
                    validationState={this.state.analysisValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <RadioElement
                    groupName='workType'
                    value={`Произведение като текст`}
                    selectedValue={this.state.workType}
                    handleClick={AuthorAddWorkActions.handleLyricsWorkChange}
                    handleChange={AuthorAddWorkActions.handleLyricsWorkChange}
                    customStyle={{display: 'block'}}
                  />
                  <RadioElement
                    groupName='workType'
                    value={`Произведение като линк`}
                    selectedValue={this.state.workType}
                    handleClick={AuthorAddWorkActions.handleNormalWorkChange}
                    handleChange={AuthorAddWorkActions.handleNormalWorkChange}
                    customStyle={{
                      marginLeft: 0,
                      paddingBottom: 10 + 'px',
                      display: 'block',
                    }}
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Създайте ново произведение'/>

                  <Link to={`/administration/authors/${parsedSearch.authorName}`}
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

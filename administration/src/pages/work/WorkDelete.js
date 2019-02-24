import React from 'react'
import { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import EditActions from '../../actions/works/EditActions'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import TextGroup from '../../components/form/TextGroup'
import TextArea from '../../components/form/TextArea'
import Submit from '../../components/form/Submit'
import DeleteStore from '../../stores/works/DeleteStore'
import DeleteActions from '../../actions/works/DeleteActions'

const queryString = require('query-string')

export default class WorkDelete extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = DeleteStore.getState()
  }

  componentWillMount () {
    DeleteStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const searchObject = queryString.parse(this.props.location.search)

    DeleteActions.getWork(this.props.match.params.id, searchObject.workType)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillUnmount () {
    DeleteStore.unlisten(this.onChange)
  }

  handleSubmit (e) {
    e.preventDefault()

    let id = this.props.match.params.id

    DeleteActions.deleteWork(id, this.state.work.workType).then(() => {
      const searchObject = queryString.parse(this.props.location.search)

      this.props.history.push(
        `/administration/authors/${searchObject.authorName}`)
    }).catch(() => {
      // Nothing
    })
  }

  render () {
    const searchObject = queryString.parse(this.props.location.search)

    return (
      <div>
        <DarkBackgroundWithText text={'Тук се показва произведението за триене'}
                                smallText={'Може да го изтриете или да се откажете'}/>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Изтрии произведението'
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
                    readOnly={true}
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
                    readOnly={true}
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
                    readOnly={true}
                  />

                  <Submit
                    type='btn-round btn-danger'
                    value='Изтриите произведението'/>

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

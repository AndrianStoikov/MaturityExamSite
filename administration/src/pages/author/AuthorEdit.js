import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import Form from '../../components/form/Form'
import { Link } from 'react-router-dom'
import TextGroup from '../../components/form/TextGroup'
import TextArea from '../../components/form/TextArea'
import Submit from '../../components/form/Submit'
import EditActions from '../../actions/authors/EditActions'
import EditStore from '../../stores/authors/EditStore'

const queryString = require('query-string')

export default class AuthorEdit extends Component {

  constructor (props) {
    super(props)

    this.state = EditStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    EditStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const authorName = this.props.match.params.name

    EditActions.getAuthor(authorName)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    EditStore.unlisten(this.onChange)
  }

  isValidContent () {
    if(this.state.author.biography === '') {
      EditActions.biographyValidationFail('Biography can\'t be empty')

      return false
    }

    if(this.state.author.shortBiography === '') {
      EditActions.shortBiographyValidationFail('Field can\'t be empty')

      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.isValidContent())
      return

    const authorName = this.props.match.params.name

    EditActions.editAuthor(authorName, this.state.author)
      .then(() => {
        const searchObject = queryString.parse(this.props.location.search)

        this.props.history.push(
          `/administration/authors/${searchObject.authorName}`)
      })
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  render () {
    let searchObject = queryString.parse(this.props.location.search)

    return (
      <div>
        <DarkBackgroundWithText text={'Тук се показва автора за редакция'}
                                smallText={'Може да редактирте или да се откажете'}/>

        <section className={'module'}>
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Редактирай автора'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  validationState={this.state.formSubmitState}
                >

                  <TextGroup
                    type='text'
                    value={this.state.author.cyrillicName}
                    label='ИМЕ'
                    handleChange={EditActions.handleCyrillicNameChange}
                    validationState={this.state.nameValidationState}
                    readOnly={true}
                  />

                  <TextGroup
                    type='text'
                    value={this.state.author.name}
                    label='ИМЕ НА АНГЛИЙСКИ'
                    handleChange={EditActions.handleNameChange}
                    validationState={this.state.nameValidationState}
                    readOnly={true}
                  />


                  <TextArea
                    type={'text'}
                    label={'Биография'}
                    value={this.state.author.biography}
                    handleChange={EditActions.handleBiographyChange}
                    validationState={this.state.biographyValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <TextArea
                    type='text'
                    value={this.state.author.shortBiography}
                    label='Кратка биография'
                    handleChange={EditActions.handleShortBiographyChange}
                    validationState={this.state.shortBiographyValidationState}
                    customStyle={{
                      textTransform: 'none',
                      height: '300px',
                    }}
                  />

                  <Submit
                    type='btn-round btn-b'
                    value='Редактирайте автора'/>

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

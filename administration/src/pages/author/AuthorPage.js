import React from 'react'
import { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import AuthorPageStore from '../../stores/authors/AuthorPageStore'
import AuthorPageActions from '../../actions/authors/AuthorPageActions'
import AuthorBiography
  from '../../components/subcomponents/authors/AuthorBiography'
import AuthorWorks from '../../components/subcomponents/authors/AuthorWorks'

export default class AuthorPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = AuthorPageStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const authorName = nextProps.location.pathname.substr(
      nextProps.location.pathname.lastIndexOf('/') + 1)

    window.scrollTo(0, 0)

    AuthorPageActions.getAuthorInfo(authorName)
  }

  componentWillMount () {
    AuthorPageStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const authorName = this.props.location.pathname.substr(
      this.props.location.pathname.lastIndexOf('/') + 1)

    AuthorPageActions
      .getAuthorInfo(authorName)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    AuthorPageStore.unlisten(this.onChange)
  }

  render () {
    const authorName = this.props.location.pathname.substr(
      this.props.location.pathname.lastIndexOf('/') + 1)

    return (
      <div>

        <DarkBackgroundWithText
          text={'Тук се показва информацията за даден автор'}/>

        <AuthorBiography biography={this.state.biography}
                         shortBiography={this.state.shortBiography}
                         name={this.state.name}
                         cyrillicName={this.state.cyrillicName}
                         linkDelete={'/administration/authors/delete/'}
                         linkEdit={'/administration/authors/edit/'}
                         id={this.state.ID}
                         authorParsedName={authorName}
        />

        <hr className='divider'/>

        <AuthorWorks works={this.state.works}
                     setEditButtons={true}
                     id={this.state.ID}
                     authorName={authorName}
                     normalWorks={this.state.normalWorks}
        />


      </div>
    )
  }
}

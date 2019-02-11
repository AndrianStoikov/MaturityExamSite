import React, { Component } from 'react'
import TopBar from '../components/sub-components/TopBar'
import Header from '../components/sub-components/Header'
import $ from 'jquery'
import AuthorPageStore from '../stores/AuthorPageStore'
import AuthorPageActions from '../actions/AuthorPageActions'
import DesignJavaScript from '../utilities/DesignJavaScript'

export default class AuthorPage extends Component {

  constructor (props) {
    super(props)

    this.state = AuthorPageStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillReceiveProps (nextProps, nextContext) {
    let authorName = nextProps.location.pathname.substr(
      nextProps.location.pathname.lastIndexOf('/') + 1)

    AuthorPageActions.getAuthor(authorName)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    $('.faq_card').off('click')

    window.scrollTo(0, 0);

    this.enableDropDownCards()
    DesignJavaScript.fixSidebar()
  }

  componentDidMount () {
    AuthorPageStore.listen(this.onChange)

    window.scrollTo(0, 0);

    let authorName = this.props.location.pathname.substr(
      this.props.location.pathname.lastIndexOf('/') + 1)
    AuthorPageActions.getAuthor(authorName)

  }

  enableDropDownCards () {
    $('.faq__card').on('click', function () {

      let el = this.getElementsByClassName('faq__card-description')[0]
      let p = $(el).children()
      let height = 0

      // + 32
      for (let i = 0; i < $(p).length; i++) {
        height += $(p[i]).height()
      }

      height += 32

      if ($(this).hasClass('active')) {
        $(el).removeAttr('style')
        $(this).removeClass('active')
      } else {
        $(el).css({'height': height})
        $(this).addClass('active')

        let newHeight = 0
        for (let i = 0; i < $(p).length; i++) {
          newHeight += $(p[i]).height()
        }

        if (newHeight > height) {
          $(el).css({'height': newHeight})
          $(this).addClass('active')
        }
      }
    })
  }

  componentWillUnmount () {
    AuthorPageStore.unlisten(this.onChange)

    $(window).off('scroll')
    $('.faq__card').off('click')

    DesignJavaScript.fixHeader()
  }

  render () {

    let authorUrl = this.props.location.pathname.substr(
      this.props.location.pathname.lastIndexOf('/'))

    return (
      <div>
        <Header infoText={this.state.biography.substr(0, 30) + '...'}
                image={`/images${authorUrl}.jpg`}/>

        <TopBar biography={this.state.biography} works={this.state.works}
                authorName={this.state.authorName}/>

        <div id="endMenu"/>
      </div>
    )
  }
}


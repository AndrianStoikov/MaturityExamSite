import React from 'react'
import $ from 'jquery'

import NavbarStore from '../../stores/common-stores/NavbarStore'

import AdminNavigation from '../subcomponents/navigation/AdminNavigation'
import Auth from '../../utilities/Auth'
import NavbarActions from '../../actions/common-actions/NavbarActions'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = NavbarStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    NavbarStore.listen(this.onChange)

    NavbarActions.getAuthors();

    this.navbarAnimation()
  }

  navbarAnimation () {
    let
      homeSection = $('.home-section'),
      navbar = $('.navbar-custom'),
      navHeight = navbar.height()

    let topScroll = $(window).scrollTop()

    if (navbar.length > 0 && homeSection.length > 0) {
      if (topScroll >= navHeight) {
        navbar.removeClass('navbar-transparent')
      } else {
        navbar.addClass('navbar-transparent')
      }
    } else {
      navbar.removeClass('navbar-transparent')
    }
  }

  componentWillUnmount () {
    NavbarStore.unlisten(this.onChange)
  }

  render () {
    let adminNavigation = <AdminNavigation isAdmin={Auth.isUserAdmin()} history={this.props.history} authors={this.state.authors}/>

    return (
      // eslint-disable-next-line
      <nav className="navbar navbar-custom navbar-transparent navbar-fixed-top" role='navigation'>
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="/administration">Матурата</a>
          </div>
          <div className="collapse navbar-collapse" id="custom-collapse" style={{marginLeft: 0 + "px", overflowX: "hidden"}}>
            <ul className="nav navbar-nav navbar-right">
              {adminNavigation}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

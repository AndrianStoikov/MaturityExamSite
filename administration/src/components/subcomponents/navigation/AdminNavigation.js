import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginActions from '../../../actions/user/LoginActions'

export default class AdminNavigation extends Component {
  handleLogout (e) {
    e.preventDefault()
    LoginActions.logoutUser().then(() => {
      this.props.history.push('/')
      window.location.reload(false)
    }).catch(() => {
      // NOTHING
    })
  }

  render () {
    let authorsNavigation

    if (this.props.authors.length > 0) {
      let authorsLinks = []

      for (let i = 0; i < this.props.authors.length; i++) {
        authorsLinks.push(
          <li key={i}>
            <Link
              to={`/administration/authors/${this.props.authors[i].name.replace(' ', '-').toLowerCase()}`}>
              {this.props.authors[i].cyrillicName}
            </Link>
          </li>,
        )
      }

      authorsNavigation = <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown" href={'/'}>Автори</a>

        <ul className="dropdown-menu">
          {authorsLinks}
        </ul>
      </li>

    }

    let navigation = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/administration">Начало</a></li>
        <li><Link to="/administration/user/login">Логин</Link></li>
      </ul>
    )
    if (this.props.isAdmin) {
      navigation = (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/administration">Начало</a></li>

          {authorsNavigation}

          <li><Link to="/administration/tests">Тестове</Link></li>
          <li><Link to={`/administration/credits`}>Материали в сайта</Link></li>


          <li><a href='/' onClick={this.handleLogout.bind(this)}>Logout</a></li>
        </ul>
      )
    }

    return navigation
  }
}

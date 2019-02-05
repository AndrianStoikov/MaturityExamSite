import React from 'react'
import { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header className="header-home header-home--color">
        <div className="background background--wave">
          <div
            className="container background background--right background--features background--header"
            style={{'backgroundImage': ` url('${this.props.image}')`}}>
            <div className="row">
              <div className="col-12">
                <h2
                  className="header-home__title header-home__title--features">{this.props.infoText}</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

import React, { Component } from 'react'

export default class HeaderImage extends Component {
  render () {

    return (
      <div
        className="container background--features background--header">
        <div className="row">
          <div className="col-12">
            <h4
              className="header-home__title header-home__title--features">{this.props.infoText}</h4>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
}

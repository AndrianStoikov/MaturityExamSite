import React, { Component } from 'react'

export default class HeaderImage extends Component {
  render () {

    return (
      <div
        className="container background--features background--header">
        <div className="row">
          <div className={this.props.centerContent ? "col-12" : 'col-7'}>
            <h4
              className="header-home__title header-home__title--features">{this.props.infoText}</h4>
          </div>

          {!this.props.centerContent ? this.props.children : ''}
        </div>

        {this.props.centerContent ? this.props.children : ''}
      </div>
    )
  }
}

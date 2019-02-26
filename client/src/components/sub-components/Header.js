import React, { Component } from 'react'
import HeaderImage from './Home/HeaderImage'

export default class Header extends Component {
  render () {
    return (
      <header
        className="header-home header-home--color header-home--center-content">
        <div className="background background--wave">

          <HeaderImage infoText={this.props.infoText}>
            {this.props.children}
          </HeaderImage>

        </div>
      </header>
    )
  }
}

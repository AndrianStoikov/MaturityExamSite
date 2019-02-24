import React, { Component } from 'react'

export default class AboutInformation extends Component {
  render () {
    let text = <span style={{color: 'black'}}>{this.props.text}</span>

    if(this.props.text.indexOf('http') === 0) {
      text = <a style={{color: 'blue'}}
                target="_blank"
                href={this.props.text}
                rel="noopener noreferrer">{this.props.text}</a>
    }

    return (
      <p
        className="header-home__description header-home__description--big">
        {text}
        <span>   -   </span>
        <span style={{color: 'black'}}>{this.props.description}</span>
      </p>
    )
  }
}

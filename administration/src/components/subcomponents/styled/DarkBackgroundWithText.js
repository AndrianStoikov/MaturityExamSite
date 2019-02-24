import React from 'react'
import { Component } from 'react'

export default class DarkBackgroundWithText extends Component {
  render () {
    return (
      <section className="module-small bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
              <div className="callout-text font-alt"><h3
                className="callout-title">{this.props.text}</h3>
                <p>{this.props.smallText
                  ? this.props.smallText
                  : 'Може да редактирате и да триете.'}</p></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

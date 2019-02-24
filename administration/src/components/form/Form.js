import React, { Component } from 'react'

export default class Form extends Component {
  render () {
    return (
      <div>
        <h4 className="font-alt">{this.props.title}</h4>
        <hr className="divider-w mb-10"/>
        <form onSubmit={this.props.handleSubmit}>
          <div className={`form-group ${this.props.submitState}`}>
            <span className={`help-block`}>{this.props.message}</span>
          </div>
          {this.props.children}
        </form>
      </div>
    )
  }
}
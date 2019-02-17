import React, { Component } from 'react'

export default class Submit extends Component {
  render () {
    return (
      <div className="form-group">
        <input type='submit' className={`btn ${this.props.type}`} value={this.props.value}/>
      </div>
    )
  }
}

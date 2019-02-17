import React, { Component } from 'react'

export default class TextGroup extends Component {
  render () {
    let lowerCaseStyle = {
      textTransform: 'none'
    }

    return (
      <div className={'form-group ' + this.props.validationState} >
        <input
          type={this.props.type}
          className={'form-control ' + this.props.additionalClass}
          style={lowerCaseStyle}
          value={this.props.value}
          onChange={this.props.handleChange} autoFocus={this.props.autoFocus}
          placeholder={this.props.label}/>
        <span className='help-block' >{this.props.message}</span>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class RadioElement extends Component {
  render () {
    return (
      <div className='radio radio-inline' style={this.props.customStyle}>
        <input
          type='radio'
          name={this.props.groupName}
          id={this.props.value.toLowerCase()}
          value={this.props.value}
          checked={this.props.selectedValue === this.props.value}
          onChange={this.props.handleChange}
          onClick={this.props.handleClick}
        />
        <label htmlFor={this.props.value.toLowerCase()}>{this.props.value}</label>
      </div>
    )
  }
}

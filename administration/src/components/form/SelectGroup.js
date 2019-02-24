import React, { Component } from 'react'

export default class SelectGroup extends Component {

  render () {
    let options = []

    for (let i = 0; i < this.props.options.length; i++) {
      options.push(
        <option value={this.props.options[i]} key={i}>
          {this.props.options[i]}
        </option>,
      )
    }

    let lowerCaseStyle = {
      textTransform: 'none',
    }

    return (
      <div className={'form-group ' + this.props.validationState}>
        <label className='control-label' >{this.props.placeholder}</label>
        <select className={'form-control form-control-lg ' +
        this.props.additionalClass}
                onChange={this.props.handleChange}
                style={lowerCaseStyle}
                autoFocus={this.props.autoFocus}
                placeholder={this.props.placeholder}
                disabled={this.props.readOnly}
                defaultValue={this.props.label}
        >
          {options}
          <option value={this.props.label} disabled={true}>
            {this.props.label}
          </option>
        </select>

        <span className='help-block'>{this.props.message}</span>
      </div>
    )
  }
}

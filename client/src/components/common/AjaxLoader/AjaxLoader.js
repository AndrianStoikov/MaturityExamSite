import React from 'react'
import { Component } from 'react'
import $ from 'jquery'

export default class AjaxLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      displayStyle: "none"
    }
  }

  componentDidMount () {
    $(document).ajaxStart(() => {
      this.setState({displayStyle: "block"})
    })

    $(document).ajaxStop(() => {
      this.setState({displayStyle: "none"})
    })
  }

  render () {
    return (
      <div id="preloader"style={{display: this.state.displayStyle}}>
          <div id="loader"></div>
      </div>
    )
  }
}

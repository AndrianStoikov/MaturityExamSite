import React, { Component } from 'react'
import $ from 'jquery'

export default class Loader extends Component {
  componentDidMount () {
    $(document).ajaxStart(() => {
      $('.loader').fadeIn()
      $('.page-loader').fadeIn('slow')
    })

    $(document).ajaxComplete(() => {
      $('.loader').fadeOut()
      $('.page-loader').fadeOut('slow')
    })

    $(document).ajaxError(() => {
      $('.loader').fadeOut()
      $('.page-loader').fadeOut('slow')
    })
  }

  render () {
    return (
      <div className="page-loader">
        <div className="loader">Loading...</div>
      </div>
    )
  }
}

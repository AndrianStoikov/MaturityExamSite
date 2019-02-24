import React, { Component } from 'react'
import $ from 'jquery'

const queryString = require('query-string')

// TODO: INSERT THE BACKGROUND LINK IN THE SITE INFORMATION
export default class ErrorPage extends Component {
  constructor (props) {
    super(props)

    this.backgroundImageUrl = 'https://wallpaperplay.com/walls/full/e/7/5/159368.jpg'
  }

  render () {
    const parsedSearch = queryString.parse(this.props.location.search)

    return (
      <section
        className="home-section home-parallax home-fade home-full-height bg-dark bg-dark-30"
        id="home"
        style={{
          backgroundImage: `url(${this.backgroundImageUrl})`,
          height: $(window).height(),
        }}>
        <div className="titan-caption">
          <div className="caption-content">
            <div
              className="font-alt mb-30 titan-title-size-4">{`Error ${parsedSearch.statusCode}`}</div>
            <div className="font-alt">
              {parsedSearch.message}
              <br/>That is all we know.
            </div>
            <div className="font-alt mt-30">
              <a
                className="btn btn-border-w btn-round" href={'/administration'}>
                Назад към началната страница
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

import React, { Component } from 'react'
import renderHtml from 'react-render-html'

export default class OfferCard extends Component {
  render () {
    let lines = this.props.paragraphs.map((of, index) => {
      if (of.subtitle) {
        return <li key={index}>
          <h4>{renderHtml(of.value)}</h4>
          <div className="borderline"/>
        </li>
      }
      if (of.scratched) {
        return <li key={index}><span>{renderHtml(of.value)}</span></li>
      }

      return <li key={index}>{renderHtml(of.value)}</li>
    })

    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="price-table font-alt">
          <h4>{this.props.title}</h4>
          <div className="borderline"/>
          <ul className="price-details">
            {lines}
            <li>{this.props.deleteButton}</li>
          </ul>
        </div>
      </div>
    )
  }
}
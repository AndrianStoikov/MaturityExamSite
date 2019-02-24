import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class PromotionCard extends Component {
  render () {
    let marginFromBottom = {
      marginBottom: '5pt'
    }

    return (
      <div className="epilation">
        <div className="row">
          <div className="col-sm-8">
            <h4 className="epilation-title font-alt">{this.props.content}</h4>
            <div className="menu-detail font-serif">{this.props.description}</div>
            <div className="menu-detail font-serif" style={marginFromBottom}><Link className='btn btn-success' to={`/administration/promotion/edit/${this.props.id}`}>Edit Promotion</Link></div>
            <div className="menu-detail font-serif" style={marginFromBottom}><Link className='btn btn-danger' to={`/administration/promotion/delete/${this.props.id}`}>Delete Promotion</Link></div>
          </div>
          <div className="col-sm-4 menu-price-detail">
            <h4 className="epilation-price font-alt">{this.props.price} <b>BGN</b></h4>
          </div>
        </div>
      </div>
    )
  }
}
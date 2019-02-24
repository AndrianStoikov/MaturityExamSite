import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class InformationCard extends Component {
  render () {

    let marginFromBottom = {
      marginBottom: '5pt'
    }

    return (
      <div className="epilation">
        <div className="row">
          <div className="col-sm-8">
            <h4 className="epilation-title font-alt">{this.props.title}</h4>
            <div className="menu-detail font-serif">{this.props.content}</div>
            <div className="menu-detail font-serif" style={marginFromBottom}><Link className='btn btn-success' to={`${this.props.linkEdit}${this.props.id}`}>Edit {this.props.name}</Link></div>
            <div className="menu-detail font-serif" style={marginFromBottom}><Link className='btn btn-danger' to={`${this.props.linkDelete}${this.props.id}`}>Delete {this.props.name}</Link></div>
          </div>
        </div>
      </div>
      )
  }
}

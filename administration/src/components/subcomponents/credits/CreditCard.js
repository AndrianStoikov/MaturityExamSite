import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreditCard extends Component {
  render () {
    let textTag

    if(this.props.text.indexOf('http') !== 0) {
      textTag = <span>{this.props.text}</span>
    }

    if(this.props.text.indexOf('http') === 0) {
      textTag = <a style={{color: 'blue'}}
                   target="_blank"
                   href={this.props.text}
                   rel="noopener noreferrer">
        {this.props.text}
      </a>
    }

    return (
      <div>
        <h4 className="font-alt mb-0">
          {textTag}
        </h4>

        <p>
          {this.props.description}
        </p>

        <div className="menu-detail font-serif"
             style={{marginBottom: '15px', marginTop: '20px'}}>
          <Link
            className='btn btn-success'
            to={`/administration/credits/edit/${this.props.creditId}`}>
            Редактирай
          </Link>
        </div>

        <div className="menu-detail font-serif">
          <Link className='btn btn-danger'
                to={`/administration/credits/delete/${this.props.creditId}`}
                style={{marginBottom: '15px'}}>
            Изтрии
          </Link>
        </div>

        <hr className="divider-w mt-10 mb-20"/>
      </div>
    )
  }
}

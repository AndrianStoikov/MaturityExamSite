import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TestCard extends Component {

  handleClick (e) {
    e.preventDefault()
  }

  render () {
    return (
      <li className="work-item with-background illustration webdesign"
          style={{
            'position': 'absolute',
            'left': '0px',
            'top': '0px',
          }}>

        <Link to={'/administration/tests/edit/' + this.props.testID}>
          <div className="work-image">
            <img
              src={'https://previews.123rf.com/images/asawinklabma/asawinklabma1611/asawinklabma161100034/66428498-a-pencil-' +
              'sitting-on-a-test-bubble-sheet-optical-form-of-an-examination-answer-sheet-with-pencil-stan.jpg'}
              alt="Test Item"/>
          </div>


          <div className="work-caption font-alt"
               style={{
                 'bottom': '50%',
                 'opacity': '1',
                 'zIndex': '3',
               }}>
            <h3 className="work-title"
                style={{fontSize: '16px'}}>{this.props.name}</h3>
            <div className="work-descr">{this.props.type}</div>
          </div>

        </Link>

        <Link
          className='btn btn-danger'
          to={`/administration/tests/delete/${this.props.testID}`}
          style={{marginTop: '30px', padding: '4px', fontSize: '13px'}}
        >
          Изтрии
        </Link>

        <hr style={{borderTop: '1px solid #000000'}}/>
      </li>
    )
  }
}

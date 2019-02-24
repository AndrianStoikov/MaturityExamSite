import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class Header extends Component {
  render () {
    return (
      <header className="header-home header-home--color">
        <div className="background background--wave">
          <div
            className="container background background--right background--features background--header">
            <div className="row">
              <div className="col-7">
                <h4
                  className="header-home__title header-home__title--features">{this.props.infoText}</h4>
              </div>

              <MediaQuery minWidth={'1015px'}>
                <div className='col-offset-2 col-3'>
                  <img src={this.props.image} style={{height: 'auto', width: '100%'}} alt={''}/>
                </div>
              </MediaQuery>

              <MediaQuery maxWidth={'650px'}>
                <div className='col-offset-2 col-3'>
                  <img src={this.props.image} style={{height: 'auto', width: '100%'}} alt={''}/>
                </div>
              </MediaQuery>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

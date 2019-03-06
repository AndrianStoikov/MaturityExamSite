import React, { Component } from 'react'
import HeaderImage from './Home/HeaderImage'
import MediaQuery from 'react-responsive'

export default class Header extends Component {
  render () {
    return (
      <header
        className={"header-home header-home--color " + this.props.centerContent}>
        <div className="background background--wave">

          <HeaderImage infoText={this.props.infoText} centerContent={this.props.centerContent}>

            {this.props.children}

            <MediaQuery minWidth={'1015px'}>
              <div className='col-offset-2 col-3'>
                <img src={this.props.image}
                     style={{height: 'auto', width: '100%'}} alt={''}/>
              </div>
            </MediaQuery>

            <MediaQuery maxWidth={'650px'}>
              <div className='col-offset-2 col-3'>
                <img src={this.props.image}
                     style={{height: 'auto', width: '100%'}} alt={''}/>
              </div>
            </MediaQuery>
          </HeaderImage>

        </div>
      </header>
    )
  }
}

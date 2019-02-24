import React from 'react'
import Routes from '../routes'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Loader from './common/Loader'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.positionOnTheBottom = {
      position: 'absolute',
      bottom: '0%',
      width: '100%'
    }
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    return (
      <main>
        <Loader/>
        <Navbar history={this.props.history}/>
        <Routes history={this.props.history}/>
        <div className='main'>
          <Footer history={this.props.history}/>
        </div>
      </main>
    )
  }
}

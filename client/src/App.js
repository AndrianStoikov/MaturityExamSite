import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import MobileNavbar from './components/common/MobileNavbar'
import Routes from './routes'
import DesignJavaScript from './utilities/DesignJavaScript'

class App extends Component {

  componentDidMount () {
    DesignJavaScript.fixHeader()
  }

  render () {
    return (
      <div>
        <Navbar/>
        <MobileNavbar/>
        <Routes/>
      </div>
    )
  }
}

export default App

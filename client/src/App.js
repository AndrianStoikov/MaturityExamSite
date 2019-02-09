import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import MobileNavbar from './components/common/MobileNavbar'
import Routes from './routes'
import DesignJavaScript from './utilities/DesignJavaScript'
import AjaxLoader from './components/common/AjaxLoader/AjaxLoader'

class App extends Component {

  componentDidMount () {
    DesignJavaScript.fixHeader()
  }

  render () {
    return (
      <div>
        <Navbar/>
        <MobileNavbar/>
        <AjaxLoader/>
        <Routes/>
      </div>
    )
  }
}

export default App

import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App'
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'

let history = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter >
    <App history={history} />
  </BrowserRouter>,
  document.getElementById('app')
)
registerServiceWorker();
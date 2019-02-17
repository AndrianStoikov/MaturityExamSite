import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AuthorPage from './pages/AuthorPage'
import TestsPage from './pages/TestsPage'

const Routes = (history) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path={'/authors/:name'} component={AuthorPage}/>

    <Route path={'/tests/all'} component={TestsPage}/>

    {/*<Route component={Home} />*/}
  </Switch>
)

export default Routes

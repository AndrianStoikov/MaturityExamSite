import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AuthorPage from './pages/AuthorPage'
import TestsPage from './pages/TestsPage'
import SingleTestPage from './pages/SingleTestPage'
import AboutPage from './pages/AboutPage'

const Routes = (history) => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path={'/authors/:name'} component={AuthorPage}/>

    <Route exact path={'/tests/all'} component={TestsPage}/>
    <Route exact path={'/tests/:id'} component={SingleTestPage}/>

    <Route exact path={'/about'} component={AboutPage}/>

    <Route component={Home} />
  </Switch>
)

export default Routes

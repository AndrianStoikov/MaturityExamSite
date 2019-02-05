import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AuthorPage from './pages/AuthorPage'

const Routes = (history) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path={'/authors/:name'} component={AuthorPage}/>

    {/*<Route path={'/authors/:name/:title'} component={BookPage}/>*/}

    {/*<Route component={Home} />*/}
  </Switch>
)

export default Routes

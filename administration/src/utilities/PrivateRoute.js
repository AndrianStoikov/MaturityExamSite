import React from 'react'
import Auth from './Auth'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    Auth.isUserAdmin() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/user/login',
        state: {form: props.model}
      }} />
    ))
  } />
)

export default PrivateRoute

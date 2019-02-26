import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class PageNotFound extends Component {
  render () {
    const statusCode = 404
    const response = 'Page not found'

    let redirect = <Redirect
      to={{
        pathname: "/administration/error",
        search: `?statusCode=${statusCode}&message=${response}`
      }}
    />

    if(this.props.location.pathname === '/')
      redirect = <Redirect to={'/administration'}      />

    return (
      <div>
        {redirect}
      </div>
    )
  }
}

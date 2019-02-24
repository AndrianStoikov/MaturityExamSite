import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import LoginActions from '../../actions/user/LoginActions'
import LoginStore from '../../stores/user/LoginStore'

import TextGroup from '../../components/form/TextGroup'
import Form from '../../components/form/Form'
import Submit from '../../components/form/Submit'
import $ from 'jquery'

class UserLogin extends Component {
  constructor (props) {
    super(props)
    this.state = LoginStore.getState()
    this.onChange = this.onChange.bind(this)

    this.backgroundImageUrl = 'assets/images/section-4.jpg'
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    LoginStore.listen(this.onChange)
  }

  componentWillUnmount () {
    LoginStore.unlisten(this.onChange)
  }

  handleSubmit (e) {
    e.preventDefault()

    let name = this.state.username
    let password = this.state.password
    if (!name) {
      LoginActions.usernameValidationFail()
      return
    }

    if (!password) {
      LoginActions.passwordValidationFail()
      return
    }

    let data = {
      username: this.state.username,
      password: this.state.password
    }

    LoginActions
      .loginUser(data)
      .then(() => {
        this.props.history.push('/administration')
        window.location.reload(false)
      })
      .catch(() => {
        // Nothing
      })
  }

  render () {
    return (
      <div>
        <section className="module bg-dark-30"
                 style={{
                   backgroundImage: `url(${this.backgroundImageUrl})`,
                   height: $(window).height(),
                   minHeight: "600px"
                 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1 className="module-title font-alt mb-0">Login</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-sm-offset-1 mb-sm-40">
                <Form
                  title='Login'
                  handleSubmit={this.handleSubmit.bind(this)}
                  message={this.state.message}
                  validationState={this.state.formSubmitState}>

                  <TextGroup
                    type='text'
                    value={this.state.username}
                    label='Username'
                    handleChange={LoginActions.handleUsernameChange}
                    validationState={this.state.usernameValidationState}/>

                  <TextGroup
                    type='password'
                    value={this.state.password}
                    label='Password'
                    handleChange={LoginActions.handlePasswordChange}
                    validationState={this.state.passwordValidationState}/>

                  <Submit
                    type='btn-round btn-b'
                    value='Login'/>

                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(UserLogin)

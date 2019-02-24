import alt from '../../alt'
import Auth from '../../utilities/Auth'

import LoginActions from '../../actions/user/LoginActions'

class LoginStore {
  constructor () {
    this.bindActions(LoginActions)

    this.username = ''
    this.password = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }

  onUsernameValidationFail () {
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = ''
    this.formSubmitState = ''
    this.message = 'Invalid credentials.'
  }

  onPasswordValidationFail () {
    this.passwordValidationState = 'has-error'
    this.usernameValidationState = ''
    this.formSubmitState = ''
    this.message = 'Invalid credentials.'
  }

  onHandleUsernameChange (e) {
    this.username = e.target.value
  }

  onHandlePasswordChange (e) {
    this.password = e.target.value
  }

  onLoginUserSuccess (data) {
    this.username = ''
    this.password = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''

    Auth.saveUser(data.user)
    Auth.authenticateUser(data.token)
  }

  onLoginUserFail (err) {
    console.log(err)

    this.formSubmitState = 'has-error'
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = 'has-error'
    this.message = err.message ? err.message : ""
  }
}

export default alt.createStore(LoginStore)

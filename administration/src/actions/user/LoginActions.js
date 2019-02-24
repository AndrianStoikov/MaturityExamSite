import alt from '../../alt'
import Data from '../../utilities/DataRequests'
import $ from 'jquery'
import Auth from '../../utilities/Auth'

class LoginActions {
  constructor () {
    this.generateActions(
      'handleUsernameChange',
      'handlePasswordChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'loginUserSuccess',
      'loginUserFail'
    )
  }

  loginUser (data) {
    return new Promise((resolve, reject) => {
      let request = Data.post('/api/user/login', data, false)

      $.ajax(request)
        .done(data => {
          this.loginUserSuccess(data)
          resolve()
        })
        .fail(data => {
          this.loginUserFail(data.responseJSON)
          reject(new Error('Unsuccessful login'))
        })
    })
  }

  logoutUser () {
    return new Promise((resolve, reject) => {
      let request = Data.post('/api/user/logout', {}, false)

      $.ajax(request)
        .done(() => {
          Auth.deauthenticateUser()
          Auth.removeUser()
          resolve()
        })
        .fail(() => {
          reject(new Error('Unsuccessful logout'))
        })
    })
  }
}

export default alt.createActions(LoginActions)

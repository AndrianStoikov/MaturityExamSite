class Auth {
  static saveUser (user) {
    window.sessionStorage.setItem('user', JSON.stringify(user))
  }

  static getUser () {
    const userJson = window.sessionStorage.getItem('user')
    if (userJson) {
      return JSON.parse(userJson)
    }
    return {}
  }

  static removeUser () {
    window.sessionStorage.removeItem('user')
  }

  static authenticateUser (token) {
    window.sessionStorage.setItem('token', token)
  }
  static isUserAuthenticated () {
    return window.sessionStorage.getItem('token') !== null
  }
  static deauthenticateUser () {
    window.sessionStorage.removeItem('token')
  }
  static getToken () {
    return window.sessionStorage.getItem('token')
  }
  static isUserAdmin () {
    if (window.sessionStorage.getItem('user')) {
      return JSON.parse(window.sessionStorage.getItem('user')).roles.indexOf('Admin') >= 0
    }
    return false
  }
}

export default Auth

import alt from '../../alt'
import NavbarActions from '../../actions/common-actions/NavbarActions'
import LoginActions from '../../actions/user/LoginActions'

class NavbarStore {
  constructor () {
    this.bindActions(NavbarActions)

    this.bindListeners({
      loginUserSuccess: LoginActions.loginUserSuccess,
    })

    this.ajaxAnimationClass = ''
    this.userLoggedIn = ''
    this.authors = []
  }

  loginUserSuccess (data) {
    this.userLoggedIn = data.user
  }

  onUpdateAjaxAnimation (animationClass) {
    this.ajaxAnimationClass = animationClass
  }

  onAuthorsGetSuccess (data) {
    this.authors = data.authors
  }
}

export default alt.createStore(NavbarStore)

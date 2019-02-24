import alt from '../../alt'
import Data from '../../utilities/DataRequests'
import $ from 'jquery'

class NavbarActions {
  constructor () {
    this.generateActions(
      'updateAjaxAnimation',
      'authorsGetSuccess',
      'authorsGetFail',
    )
  }

  getAuthors () {
    let request = Data.get('/authors', false)

    $.ajax(request).done((data) => {
      this.authorsGetSuccess(data)
    }).fail((err) => {
      this.authorsGetFail(err)
    })

    return 1
  }
}

export default alt.createActions(NavbarActions)

import alt from '../../alt'
import Data from '../../utilities/DataRequests'
import $ from 'jquery'

class AuthorPageActions {
  constructor () {
    this.generateActions(
      'getAuthorInfoSuccess',
      'getAuthorInfoFail',
    )
  }

  getAuthorInfo (escapedAuthorName) {
    return new Promise((resolve, reject) => {
      let request = Data.get(`/authors/${escapedAuthorName}`, false)

      $.ajax(request)
        .done((data) => {
          this.getAuthorInfoSuccess(data)
          resolve(data)
        })
        .fail(err => {

          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.getAuthorInfoFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(AuthorPageActions)

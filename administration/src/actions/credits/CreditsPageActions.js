import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class CreditsPageActions {
  constructor () {
    this.generateActions(
      'getCreditsSuccess',
      'getCreditsFail',
    )
  }

  getCredits () {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/credits/all`, true)

      $.ajax(request)
        .done((data) => {
          this.getCreditsSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.getCreditsFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(CreditsPageActions)

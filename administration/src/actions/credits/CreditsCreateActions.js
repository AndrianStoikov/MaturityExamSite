import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class CreditsCreateActions {
  constructor () {
    this.generateActions(
      'createCreditSuccess',
      'createCreditFail',
      'handleTextChange',
      'handleDescriptionChange',
      'textValidationFail',
      'descriptionValidationFail'
    )
  }

  createCredit(creditObj) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/credits`, creditObj,true)

      $.ajax(request)
        .done((data) => {
          this.createCreditSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.createCreditFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(CreditsCreateActions)

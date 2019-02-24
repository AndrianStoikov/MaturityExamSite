import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class CreditsEditActions {
  constructor () {
    this.generateActions(
      'getCreditSuccess',
      'getCreditFail',
      'editCreditSuccess',
      'editCreditFail',
      'handleTextChange',
      'handleDescriptionChange',
      'textValidationFail',
      'descriptionValidationFail',
    )
  }

  getCredit (creditId) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/credits/${creditId}`, true)

      $.ajax(request)
        .done((data) => {
          this.getCreditSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.getCreditFail(errorObject)
          reject(errorObject)
        })
    })
  }

  editCredit (creditId, creditObj) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/credits/${creditId}`, creditObj, true)

      $.ajax(request)
        .done((data) => {
          this.editCreditSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.editCreditFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(CreditsEditActions)

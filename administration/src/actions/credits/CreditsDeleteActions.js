import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class CreditsDeleteActions {
  constructor () {
    this.generateActions(
      'getCreditSuccess',
      'getCreditFail',
      'deleteCreditSuccess',
      'deleteCreditFail',
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

  deleteCredit (creditId) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/credits/delete/${creditId}`, {}, true)

      $.ajax(request)
        .done((data) => {
          this.deleteCreditSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.deleteCreditFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(CreditsDeleteActions)

import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class SingleTestPageActions {
  constructor () {
    this.generateActions(
      'getTestSuccess',
      'getTestFail',
    )
  }

  getTest (testID) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/tests/${testID}`, true)

      $.ajax(request).done((data) => {
        this.getTestSuccess(data)
        resolve(data)
      }).fail((err) => {
        let errorObject = {
          statusCode: err.status,
          error: err.responseJSON,
        }

        this.getTestFail(err)
        reject(errorObject)
      })
    })
  }
}

export default alt.createActions(SingleTestPageActions)

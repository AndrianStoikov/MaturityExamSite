import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class TestCreateActions {
  constructor () {
    this.generateActions(
      'createTestSuccess',
      'createTestFail',
      'handleNameChange',
      'nameValidationFail',
    )
  }

  createTest (testObject) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/tests/add`, testObject, true)

      $.ajax(request)
        .done((data) => {
          this.createTestSuccess(data)
          resolve(data)
        })
        .fail(err => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.createTestFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(TestCreateActions)

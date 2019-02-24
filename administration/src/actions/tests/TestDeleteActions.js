import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class TestDeleteActions {
  constructor () {
    this.generateActions(
      'testGetSuccess',
      'testGetFail',
      'testDeleteSuccess',
      'testDeleteFail',
    )
  }

  getTest (testId) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/tests/${testId}`, true)

      $.ajax(request)
        .done((data) => {
          this.testGetSuccess(data)
          resolve(data)
        })
        .fail(err => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.testGetFail(errorObject)
          reject(errorObject)
        })
    })
  }

  deleteTest (testId) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/tests/delete/${testId}`, {}, true)

      $.ajax(request)
        .done((data) => {
          this.testDeleteSuccess(data)
          resolve(data)
        })
        .fail(err => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.testDeleteFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(TestDeleteActions)

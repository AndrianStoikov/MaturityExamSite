import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class DeleteActions {
  constructor () {
    this.generateActions(
      'workGetSuccess',
      'workGetFail',
      'workDeleteSuccess',
      'workDeleteFail',
    )
  }

  getWork (workId, workType) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/works/${workId}?workType=${workType}`,
        true)

      $.ajax(request).done((data) => {
        this.workGetSuccess(data)
      }).fail((err) => {
        let errorObject = {
          statusCode: err.status,
          error: err.responseJSON,
        }

        this.workGetFail(errorObject)
        reject(errorObject)
      })
    })
  }

  deleteWork (workId, workType) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post('/works/delete/' + workId,
        {workType: workType}, true)

      $.ajax(request)
        .done(data => {
          this.workDeleteSuccess(data)
          resolve()
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.workDeleteFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(DeleteActions)

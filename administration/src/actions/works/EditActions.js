import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class EditActions {
  constructor () {
    this.generateActions(
      'workGetSuccess',
      'workGetFail',
      'workEditSuccess',
      'workEditFail',
      'handleNameChange',
      'handleContentChange',
      'handleAnalysisChange',
      'handleLyricsWorkChange',
      'handleWorkChange'
    )
  }

  getWork (workId, workType) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(`/works/${workId}?workType=${workType}`, true)

      $.ajax(request).done((data) => {
        this.workGetSuccess(data)
        resolve(data)
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

  editWork (workID, workObj) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/works/${workID}`, workObj, true)

      $.ajax(request)
      .done(data => {
        this.workEditSuccess(data)
        resolve()
      })
      .fail(err => {

        let errorObject = {
          statusCode: err.status,
          error: err.responseJSON,
        }

        this.workEditFail(errorObject)
        reject(errorObject)
      })
    })
  }
}

export default alt.createActions(EditActions)

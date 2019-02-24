import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class AuthorAddWorkActions {
  constructor () {
    this.generateActions(
      'createWorkSuccess',
      'createWorkFail',
      'handleNameChange',
      'handleContentChange',
      'handleAnalysisChange',
      'handleLyricsWorkChange',
      'handleNormalWorkChange',
      'nameValidationFail',
      'contentValidationFail',
      'analysisValidationFail',
    )
  }

  createWork (authorId, workObject) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/authors/${authorId}/add-work`,
        workObject, true)

      $.ajax(request)
        .done((data) => {
          this.createWorkSuccess(data)
          resolve(data)
        })
        .fail((err) => {
          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.createWorkFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(AuthorAddWorkActions)

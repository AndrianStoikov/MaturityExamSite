import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class EditActions {
  constructor () {
    this.generateActions(
      'getAuthorSuccess',
      'getAuthorFail',
      'editAuthorSuccess',
      'editAuthorFail',
      'handleBiographyChange',
      'handleShortBiographyChange',
      'handleCyrillicNameChange',
      'handleNameChange',
      'biographyValidationFail',
      'shortBiographyFail'
    )
  }

  getAuthor (name) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get('/authors/' + name, true)

      $.ajax(request)
        .done((data) => {
          this.getAuthorSuccess(data)
          resolve(data)
        })
        .fail(err => {

          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.getAuthorFail(errorObject)
          reject(errorObject)
        })
    })
  }

  editAuthor (authorName, authorObject) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(`/authors/${authorName}`, authorObject, true)

      $.ajax(request)
        .done(data => {
          this.editAuthorSuccess(data)
          resolve()
        })
        .fail(err => {

          let errorObject = {
            statusCode: err.status,
            error: err.responseJSON,
          }

          this.editAuthorFail(errorObject)
          reject(errorObject)
        })
    })
  }
}

export default alt.createActions(EditActions)

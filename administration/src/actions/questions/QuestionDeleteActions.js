import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class QuestionDeleteActions {
  constructor () {
    this.generateActions(
      'getQuestionSuccess',
      'getQuestionFail',
      'deleteQuestionSuccess',
      'deleteQuestionFail',
    )
  }

  getQuestion (testID, questionId) {
    const request = DataRequests.get(`/tests/${testID}/question/${questionId}`)

    $.ajax(request).done((data) => {
      this.getQuestionSuccess(data)
    }).fail((err) => {
      this.getQuestionFail(err)
    })

    return 1
  }

  deleteQuestion (testID, questionID) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(
        `/tests/${testID}/question/delete/${questionID}`, {}, true)

      $.ajax(request)
        .done(data => {
          this.deleteQuestionSuccess(data)
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

export default alt.createActions(QuestionDeleteActions)

import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class QuestionEditActions {
  constructor () {
    this.generateActions(
      'getQuestionSuccess',
      'getQuestionFail',
      'editQuestionSuccess',
      'editQuestionFail',
      'handleQuestionChange',
      'handleFirstAnswerChange',
      'handleSecondAnswerChange',
      'handleThirdAnswerChange',
      'handleForthAnswerChange',
      'handleAnswerChange',
      'questionValidationFail',
      'firstAnswerValidationFail',
      'secondAnswerValidationFail',
      'thirdAnswerValidationFail',
      'forthAnswerValidationFail',
      'rightAnswerValidationFail'
    )
  }

  getQuestion (testID, questionId) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.get(
        `/tests/${testID}/question/${questionId}`)

      $.ajax(request).done((data) => {
        this.getQuestionSuccess(data)
        resolve(data)
      }).fail((err) => {
        let errorObject = {
          statusCode: err.status,
          error: err.responseJSON,
        }

        this.getQuestionFail(errorObject)
        reject(errorObject)
      })
    })

  }

  editQuestion (testId, questionId, questionObject) {
    return new Promise((resolve, reject) => {
      const request = DataRequests.post(
        `/tests/${testId}/question/${questionId}`, questionObject, true)

      $.ajax(request).done(data => {
        this.editQuestionSuccess(data)
        resolve()
      }).fail(err => {
        let errorObject = {
          statusCode: err.status,
          error: err.responseJSON,
        }

        this.editQuestiontFail(errorObject)
        reject(errorObject)
      })
    })
  }
}

export default alt.createActions(QuestionEditActions)

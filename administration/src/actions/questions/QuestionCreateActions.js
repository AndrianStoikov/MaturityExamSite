import alt from '../../alt'
import Data from '../../utilities/DataRequests'
import $ from 'jquery'

class QuestionCreateActions {
  constructor () {
    this.generateActions(
      'createQuestionSuccess',
      'createQuestionFail',
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

  createQuestion (questionObject, testID) {
    return new Promise((resolve, reject) => {
      let request = Data.post(`/tests/${testID}/add-question`, questionObject,
        true)

      $.ajax(request).done(data => {
        this.createQuestionSuccess(data)
        resolve()
      }).fail(data => {
        this.createQuestionFail(data.responseJSON)
        reject(new Error('Unsuccessful question create'))
      })
    })
  }
}

export default alt.createActions(QuestionCreateActions)

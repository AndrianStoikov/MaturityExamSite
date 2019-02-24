import alt from '../../alt'
import QuestionEditActions from '../../actions/questions/QuestionEditActions'

class QuestionEditStore {
  constructor () {
    this.bindActions(QuestionEditActions)

    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
    this.answerAsText = ''
    this.message = ''

    this.questionValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
  }

  onGetQuestionSuccess (data) {
    this.question = data.question.text
    this.firstAnswer = data.question.possibleAnswers[0]
    this.secondAnswer = data.question.possibleAnswers[1]
    this.thirdAnswer = data.question.possibleAnswers[2]
    this.forthAnswer = data.question.possibleAnswers[3]
    this.indexOfAnswer = data.question.indexOfAnswer
    this.answerAsText = data.question.possibleAnswers[this.indexOfAnswer]
    this.message = ''
  }

  onGetQuestionFail (err) {
    console.log(err)
  }

  onEditQuestionSuccess (data) {
    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
    this.answerAsText = ''
    this.message = ''

    this.questionValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
  }

  onHandleQuestionChange (e) {
    this.question = e.target.value
  }

  onHandleFirstAnswerChange (e) {
    this.firstAnswer = e.target.value
  }

  onHandleSecondAnswerChange (e) {
    this.secondAnswer = e.target.value
  }

  onHandleThirdAnswerChange (e) {
    this.thirdAnswer = e.target.value
  }

  onHandleForthAnswerChange (e) {
    this.forthAnswer = e.target.value
  }

  onHandleAnswerChange (e) {
    this.indexOfAnswer = e.target.selectedIndex
  }

  onQuestionValidationFail (message) {
    this.message = message

    this.questionValidationState = 'has-error'
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
  }

  onFirstAnswerValidationFail (message) {
    this.message = message

    this.questionValidationState = ''
    this.firstAnswerValidationState = 'has-error'
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = ''
  }

  onSecondAnswerValidationFail (message) {
    this.message = message

    this.questionValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = 'has-error'
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = ''
  }

  onThirdAnswerValidationFail (message) {
    this.message = message

    this.secondAnswerValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = 'has-error'
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = ''
  }

  onForthAnswerValidationFail (message) {
    this.message = message

    this.secondAnswerValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = 'has-error'
    this.rightAnswerValidationState = ''
  }

  onRightAnswerValidationFail (message) {
    this.message = message

    this.secondAnswerValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = 'has-error'
  }
}

export default alt.createStore(QuestionEditStore)

import alt from '../../alt.js'
import CreateQuestionActions
  from '../../actions/questions/QuestionCreateActions'

class QuestionCreateStore {
  constructor () {
    this.bindActions(CreateQuestionActions)

    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
    this.message = ''

    this.questionValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = ''
  }

  onCreateQuestionSuccess (data) {
    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
    this.message = ''

    this.questionValidationState = ''
    this.firstAnswerValidationState = ''
    this.secondAnswerValidationState = ''
    this.thirdAnswerValidationState = ''
    this.forthAnswerValidationState = ''
    this.rightAnswerValidationState = ''
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

export default alt.createStore(QuestionCreateStore)

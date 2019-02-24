import alt from '../../alt'
import QuestionDeleteActions from '../../actions/questions/QuestionDeleteActions'

class QuestionDeleteStore {
  constructor () {
    this.bindActions(QuestionDeleteActions)

    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
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

  onQuestionDeleteSuccess () {
    this.question = ''
    this.firstAnswer = ''
    this.secondAnswer = ''
    this.thirdAnswer = ''
    this.forthAnswer = ''
    this.indexOfAnswer = -1
  }
}

export default alt.createStore(QuestionDeleteStore)

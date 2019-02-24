import alt from '../../alt'
import SingleTestPageActions from '../../actions/Tests/SingleTestPageActions'

class SingleTestPageStore {
  constructor () {
    this.bindActions(SingleTestPageActions)

    this.test = {
      name: '',
      questions: [],
    }

    this.showResult = false
    this.rightAnswers = 0
    this.wrongAnswers = 0
  }

  onGetTestSuccess (data) {
    this.test = data.test

    for (let i = 0; i < data.test.questions.length; i++) {
      this.test.questions[i].checkedAnswer = ''
      this.test.questions[i].answered = false
      this.test.questions[i].shouldBeChecked = false
    }
  }

  onGetTestFail (err) {

  }

  onRadioButtonClicked ([questionId, possibleAnswer, answerIndex]) {

    let result = this.test.questions.find((e) => {
      return e._id === questionId
    })

    if (!result)
      return

    result.checkedAnswer = result.possibleAnswers[answerIndex]
  }

  onCheckAnswersClicked () {
    this.test.questions = this.test.questions.map((c) => {
      c.answered = c.possibleAnswers[c.indexOfAnswer] === c.checkedAnswer
      c.shouldBeChecked = true
      return c
    })

    this.showResult = true
    this.rightAnswers = this.test.questions.reduce((total, question) => {
      if (question.answered)
        return total + 1

      return total
    }, 0)

    this.wrongAnswers = this.test.questions.reduce((total, question) => {
      if (!question.answered)
        return total + 1

      return total
    }, 0)
  }
}

export default alt.createStore(SingleTestPageStore, 'SingleTestPageStore')

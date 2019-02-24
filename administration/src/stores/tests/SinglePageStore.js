import alt from '../../alt'
import SinglePageActions from '../../actions/tests/SingleTestPageActions'

class SinglePageStore {
  constructor () {
    this.bindActions(SinglePageActions)

    this.questions = []
    this.testName = ''
    this.errorMessage = ''
  }

  onGetTestSuccess (data) {
    this.testName = data.test.name
    this.questions = data.test.questions
  }

  onGetTestFail (err) {
    this.errorMessage = err.response
  }
}

export default alt.createStore(SinglePageStore)

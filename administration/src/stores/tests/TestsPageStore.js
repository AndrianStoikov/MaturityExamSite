import alt from '../../alt'
import TestsPageActions from '../../actions/tests/TestsPageActions'

class TestsPageStore {
  constructor () {
    this.bindActions(TestsPageActions)

    this.tests = []
  }

  onGetTestsSuccess (data) {
    this.tests = data.tests
  }

  onGetTestsFail (err) {
    console.log(err)
  }
}

export default alt.createStore(TestsPageStore)

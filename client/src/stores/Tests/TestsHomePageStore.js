import alt from '../../alt'
import TestsHomePageActions from '../../actions/Tests/TestsHomePageActions'

class TestsHomePageStore {
  constructor () {
    this.bindActions(TestsHomePageActions)

    this.tests = []
  }

  onGetTestsSuccess (data) {
    this.tests = data.tests
  }

  onGetTestsFail (error) {
    console.log(error)
  }
}

export default alt.createStore(TestsHomePageStore)

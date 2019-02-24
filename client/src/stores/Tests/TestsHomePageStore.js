import alt from '../../alt'
import TestsHomePageActions from '../../actions/Tests/TestsHomePageActions'

class TestsHomePageStore {
  constructor () {
    this.bindActions(TestsHomePageActions)

    this.tests = []
    this.searchedTests = []
  }

  onGetTestsSuccess (data) {
    this.tests = data.tests
    this.searchedTests = data.tests
  }

  onGetTestsFail (error) {
    console.log(error)
  }

  onSortTests (search) {
    this.searchedTests = this.tests.filter((test) => {
      return test.name.indexOf(search) === 0
    })
  }
}

export default alt.createStore(TestsHomePageStore, 'TestsHomePageStore')

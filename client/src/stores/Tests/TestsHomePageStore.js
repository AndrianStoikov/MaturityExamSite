import alt from '../../alt'
import TestsHomePageActions from '../../actions/Tests/TestsHomePageActions'

class TestsHomePageStore {
  constructor () {
    this.bindActions(TestsHomePageActions)

    this.tests = []
    this.searchedTests = []
  }

  onGetTestsSuccess (data) {
    this.tests = data.tests.map((a) => {
      a.name.trim()
      return a
    })

    this.tests.sort((a, b) => {
      let firstIndex
      let secondIndex

      let regex = /\d+/gm

      let firstMatch = a.name.match(regex)
      let secondMatch = b.name.match(regex)

      if (firstMatch && secondMatch) {
        firstIndex = parseInt(firstMatch[0])
        secondIndex = parseInt(secondMatch[0])
      }

      return firstIndex - secondIndex
    })

    this.searchedTests = this.tests
  }

  onGetTestsFail (error) {
    console.log(error)
  }

  onSortTests (search) {
    this.searchedTests = this.tests.filter((test) => {
      return test.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}

export default alt.createStore(TestsHomePageStore, 'TestsHomePageStore')

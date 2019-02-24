import alt from '../../alt'
import TestDeleteActions from '../../actions/tests/TestDeleteActions'

class TestDeleteStore {
  constructor () {
    this.bindActions(TestDeleteActions)

    this.test = {
      name: '',
    }
  }

  onTestGetSuccess (data) {
    this.test.name = data.test.name
  }

  onTestGetFail (err) {
    console.log(err)
  }
}

export default alt.createStore(TestDeleteStore)

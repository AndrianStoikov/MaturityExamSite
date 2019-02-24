import alt from '../../alt'
import TestCreateActions from '../../actions/tests/TestCreateActions'

class TestCreateStore {
  constructor () {
    this.bindActions(TestCreateActions)

    this.test = {
      name: '',
    }

    this.message = ''
    this.nameValidationState = ''
  }

  onTestCreateSuccess (data) {
    console.log(data)

    this.test = {
      name: '',
    }

    this.message = ''
    this.nameValidationState = ''
  }

  onHandleNameChange (e) {
    this.test.name = e.target.value
  }

  onNameValidationFail (message) {
    this.message = message
    this.nameValidationState = 'has-error'
  }
}

export default alt.createStore(TestCreateStore)

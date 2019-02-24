import alt from '../../alt'
import CreditsCreateActions from '../../actions/credits/CreditsCreateActions'

class CreditCreateStore {
  constructor (props) {
    this.bindActions(CreditsCreateActions)

    this.credit = {
      text: '',
      description: '',
    }

    this.message = ''
    this.textValidationState = ''
    this.descriptionValidationState = ''
  }

  onHandleTextChange(e) {
    this.credit.text = e.target.value
  }

  onHandleDescriptionChange (e) {
    this.credit.description = e.target.value
  }

  onTextValidationFail (message) {
    this.message = message

    this.textValidationState = 'has-error'
    this.descriptionValidationState = ''
  }

  onDescriptionValidationFail (message) {
    this.message = message

    this.textValidationState = ''
    this.descriptionValidationState = 'has-error'
  }
}

export default alt.createStore(CreditCreateStore)

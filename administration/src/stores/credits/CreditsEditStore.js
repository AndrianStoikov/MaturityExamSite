import alt from '../../alt'
import CreditsEditActions from '../../actions/credits/CreditsEditActions'

class CreditEditStore {
  constructor (props) {
    this.bindActions(CreditsEditActions)

    this.credit = {
      text: '',
      description: '',
    }

    this.message = ''
    this.textValidationState = ''
    this.descriptionValidationState = ''
  }

  onGetCreditSuccess (data) {
    this.credit.text = data.credit.text
    this.credit.description = data.credit.description
  }

  onGetCreditFail (err) {
    console.log(err)
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

export default alt.createStore(CreditEditStore)

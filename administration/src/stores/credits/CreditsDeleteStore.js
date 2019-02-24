import alt from '../../alt'
import CreditsDeleteActions from '../../actions/credits/CreditsDeleteActions'

class CreditsDeleteStore {
  constructor () {
    this.bindActions(CreditsDeleteActions)

    this.credit = {
      text: '',
      description: '',
    }

  }

  onGetCreditSuccess (data) {
    this.credit.text = data.credit.text
    this.credit.description = data.credit.description
  }

  onGetCreditFail (err) {
    console.log(err)
  }

}

export default alt.createStore(CreditsDeleteStore)

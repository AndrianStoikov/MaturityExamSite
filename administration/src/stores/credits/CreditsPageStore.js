import alt from '../../alt'
import CreditsPageActions from '../../actions/credits/CreditsPageActions'

class CreditsPageStore {
  constructor () {
    this.bindActions(CreditsPageActions)

    this.credits = []
  }

  onGetCreditsSuccess (data) {
    this.credits = data.credits ? data.credits : []
  }

  onGetCreditsFail (err) {
    console.log(err)
  }
}

export default alt.createStore(CreditsPageStore)

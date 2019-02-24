import alt from '../../alt'
import CreditsPageActions from '../../actions/Credits/CreditsPageActions'

class CreditsPageStore {
  constructor () {
    this.bindActions(CreditsPageActions)

    this.credits = []
  }

  onGetCreditsSuccess (data) {
    this.credits = data.credits
  }
}

export default alt.createStore(CreditsPageStore, 'CreditsPageStore')

import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class CreditsPageActions {
  constructor () {
    this.generateActions(
      'getCreditsSuccess',
      'getCreditsFail',
    )
  }

  getCredits () {
    const request = DataRequests.get(`/credits/all`, false)

    $.ajax(request)
      .done((data) => {
        this.getCreditsSuccess(data)
      })
      .fail(err => {
        this.getCreditsFail(err)
      })

    return 1
  }
}

export default alt.createActions(CreditsPageActions)

import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class SingleTestPageActions {
  constructor () {
    this.generateActions(
      'getTestSuccess',
      'getTestFail',
      'radioButtonClicked',
      'checkAnswersClicked'
    )
  }

  getTest (testId) {
    const request = DataRequests.get(`/tests/${testId}`, false)

    $.ajax(request)
      .done((data) => {
        this.getTestSuccess(data)
      })
      .fail((err) => {
        console.log(err)
        this.getTestFail(err)
      })

    return 1
  }
}

export default alt.createActions(SingleTestPageActions)

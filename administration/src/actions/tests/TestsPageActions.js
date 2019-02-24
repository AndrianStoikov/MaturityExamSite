import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class TestsPageActions {
  constructor () {
    this.generateActions(
      'getTestsSuccess',
      'getTestsFail'
    )
  }

  getTests() {
    const request = DataRequests.get('/tests', true)

    $.ajax(request)
      .done((data) => {
        this.getTestsSuccess(data)
    })
      .fail((err) => {
        this.getTestsFail(err)
    })

    return 1
  }
}

export default alt.createActions(TestsPageActions)

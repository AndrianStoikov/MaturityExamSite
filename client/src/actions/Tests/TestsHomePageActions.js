import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class TestsHomePageActions {
  constructor () {
    this.generateActions(
      'getTestsSuccess',
      'getTestsFail',
    )
  }

  getAllTests () {

    let request = DataRequests.get('/tests', false)

    $.ajax(request).then(data => {
      this.getTestsSuccess(data)
    }).fail(err => {
      this.getTestsFail(err)
    })

    return 1
  }
}

export default alt.createActions(TestsHomePageActions)

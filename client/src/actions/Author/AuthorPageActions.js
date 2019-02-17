import alt from '../../alt'
import DataRequests from '../../utilities/DataRequests'
import $ from 'jquery'

class AuthorPageActions {
  constructor () {
    this.generateActions(
      'getAuthorSuccess',
      'getAuthorFail',
    )
  }

  getAuthor (authorName) {
    let request = DataRequests.get('/authors/' + authorName, false)

    $.ajax(request).then((data) => {
      this.getAuthorSuccess(data)
    }).fail((err) => {
      this.getAuthorFail(err.responseJSON)
    })

    return 1
  }
}

export default alt.createActions(AuthorPageActions)

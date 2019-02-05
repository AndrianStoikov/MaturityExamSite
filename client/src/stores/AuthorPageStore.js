import alt from '../alt'
import AuthorPageActions from '../actions/AuthorPageActions'

class AuthorPageStore {
  constructor () {
    this.bindActions(AuthorPageActions)

    this.biography = ''
    this.works = []
    this.authorID = ''
    this.authorName = ''
  }

  onGetAuthorSuccess (data) {
    this.biography = data.author.biography
    this.authorID = data.author._id
    this.works = data.author.works
    this.authorName = data.author.cyrillicName;
  }

  onGetAuthorFail (error) {

  }
}

export default alt.createStore(AuthorPageStore)

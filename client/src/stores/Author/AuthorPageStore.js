import alt from '../../alt'
import AuthorPageActions from '../../actions/Author/AuthorPageActions'

class AuthorPageStore {
  constructor () {
    this.bindActions(AuthorPageActions)

    this.biography = ''
    this.works = []
    this.authorID = ''
    this.authorName = ''
  }

  onGetAuthorSuccess (data) {
    this.biography = data.author.biography ? data.author.biography : ""
    this.authorID = data.author._id ? data.author._id : ""
    this.works = data.author.works ? data.author.works : []
    this.authorName = data.author.cyrillicName ? data.author.cyrillicName : ""
  }

  onGetAuthorFail (error) {
    console.log(error)
  }
}

export default alt.createStore(AuthorPageStore)

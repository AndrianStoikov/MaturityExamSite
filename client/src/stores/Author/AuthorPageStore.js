import alt from '../../alt'
import AuthorPageActions from '../../actions/Author/AuthorPageActions'

class AuthorPageStore {
  constructor () {
    this.bindActions(AuthorPageActions)

    this.biography = ''
    this.works = []
    this.authorID = ''
    this.authorName = ''
    this.shortBiography = ''
    this.normalWorks = []
  }

  onGetAuthorSuccess (data) {
    this.biography = data.author.biography ? data.author.biography : ""
    this.shortBiography = data.author.shortBiography ? data.author.shortBiography : ""
    this.authorID = data.author._id ? data.author._id : ""
    this.works = data.author.works ? data.author.works : []
    this.authorName = data.author.cyrillicName ? data.author.cyrillicName : ""
    this.normalWorks = data.author.normalWorks ? data.author.normalWorks : []
  }

  onGetAuthorFail (error) {
    console.log(error)
  }
}

export default alt.createStore(AuthorPageStore, 'AuthorPageStore')

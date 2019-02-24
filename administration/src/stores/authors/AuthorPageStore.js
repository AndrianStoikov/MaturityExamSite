import alt from '../../alt'
import AuthorPageActions from '../../actions/authors/AuthorPageActions'

class AuthorPageStore {
  constructor () {
    this.bindActions(AuthorPageActions)

    this.biography = ''
    this.shortBiography = ''
    this.name = ''
    this.cyrillicName = ''
    this.works = []
    this.normalWorks = []
    this.ID = ''
  }

  onGetAuthorInfoSuccess (data) {
    this.biography = data.author.biography
    this.shortBiography = data.author.shortBiography
    this.name = data.author.name
    this.cyrillicName = data.author.cyrillicName
    this.works = data.author.works
    this.normalWorks = data.author.normalWorks
    this.ID = data.author._id
  }

  onGetAuthorInfoFail (err) {

  }
}

export default alt.createStore(AuthorPageStore)

import alt from '../../alt'
import EditActions from '../../actions/authors/EditActions'

class EditStore {
  constructor () {
    this.bindActions(EditActions)

    this.author = {
      name: '',
      cyrillicName: '',
      biography: '',
      shortBiography: '',
    }

    this.biographyValidationState = ''
    this.shortBiographyValidationState = ''
  }

  onGetAuthorSuccess (data) {
    const author = data.author

    this.author.name = author.name
    this.author.cyrillicName = author.cyrillicName
    this.author.biography = author.biography
    this.author.shortBiography = author.shortBiography
  }

  onGetAuthorFail (err) {
    console.log(err)
  }

  onEditAuthorSuccess () {
    this.author = {
      name: '',
      cyrillicName: '',
      biography: '',
      shortBiography: '',
    }
  }

  onHandleBiographyChange (e) {
    this.author.biography = e.target.value
  }

  onHandleShortBiographyChange (e) {
    this.author.shortBiography = e.target.value
  }
}

export default alt.createStore(EditStore, 'AuthorEditStore')

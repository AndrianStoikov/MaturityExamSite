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

    this.message = ''
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

    this.message = ''
    this.biographyValidationState = ''
    this.shortBiographyValidationState = ''
  }

  onHandleBiographyChange (e) {
    this.author.biography = e.target.value
  }

  onHandleShortBiographyChange (e) {
    this.author.shortBiography = e.target.value
  }

  biographyValidationFail (message) {
    this.message = message

    this.biographyValidationState = 'has-error'
    this.shortBiographyValidationState = ''
  }

  shortBiographyFail (message) {
    this.message = message

    this.biographyValidationState = ''
    this.shortBiographyValidationState = 'has-error'
  }
}

export default alt.createStore(EditStore, 'AuthorEditStore')

import alt from '../../alt'
import AuthorAddWorkActions from '../../actions/authors/AuthorAddWorkActions'

class AuthorAddWorkStore {
  constructor () {
    this.bindActions(AuthorAddWorkActions)

    this.work = {
      name: '',
      workContent: '',
      workAnalysis: '',
      workType: 'lyrics'
    }

    this.message = ''
    this.nameValidationState = ''
    this.contentValidationState = ''
    this.analysisValidationState = ''
    this.workType = 'Произведение като текст'
  }

  onCreateWorkSuccess () {
    this.work = {
      name: '',
      workContent: '',
      workAnalysis: '',
      workType: 'lyrics'
    }

    this.message = ''
    this.nameValidationState = ''
    this.contentValidationState = ''
    this.analysisValidationState = ''
    this.workType = 'Произведение като текст'
  }

  onHandleNameChange (e) {
    this.work.name = e.target.value
  }

  onHandleContentChange (e) {
    this.work.workContent = e.target.value
  }

  onHandleAnalysisChange (e) {
    this.work.workAnalysis = e.target.value
  }

  onHandleLyricsWorkChange () {
    this.workType = 'Произведение като текст'
    this.work.workType = 'lyrics'
  }

  onHandleNormalWorkChange () {
    this.workType = 'Произведение като линк'
    this.work.workType = 'normal'
  }

  onNameValidationFail (message) {
    this.message = message

    this.nameValidationState = 'has-error'
    this.contentValidationState = ''
    this.analysisValidationState = ''
  }

  onContentValidationFail (message) {
    this.message = message

    this.nameValidationState = ''
    this.contentValidationState = 'has-error'
    this.analysisValidationState = ''
  }

  onAnalysisValidationFail (message) {
    this.message = message

    this.nameValidationState = ''
    this.contentValidationState = ''
    this.analysisValidationState = 'has-error'
  }
}

export default alt.createStore(AuthorAddWorkStore)

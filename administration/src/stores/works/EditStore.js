import alt from '../../alt'
import EditActions from '../../actions/works/EditActions'

class EditStore {
  constructor () {
    this.bindActions(EditActions)

    this.work = {
      name: '',
      workContent: '',
      workAnalysis: '',
      workType: 'lyrics',
    }

    this.workType = 'Произведение като текст'
    this.works = []
    this.nameValidationState = ''
    this.contentValidationState = ''
    this.analysisValidationState = ''
  }

  onWorkGetSuccess (data) {
    this.work.name = data.name
    this.work.workContent = data.paragraphs ? data.paragraphs.join('\n') : data.workContent
    this.work.workAnalysis = data.analysis.join('\n')

    if(data.paragraphs) {
      this.work.workType = "lyrics"
      this.workType = 'Произведение като текст'
    } else {
      this.work.workType = "normal"
      this.workType = 'Произведение като линк'
    }

  }

  onWorkEditSuccess (data) {
    // console.log(data)
  }

  onWorkEditFail (err) {
    // console.log(err)
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
}

export default alt.createStore(EditStore, 'WorksEditStore')

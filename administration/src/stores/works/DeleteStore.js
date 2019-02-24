import alt from '../../alt'
import DeleteActions from '../../actions/works/DeleteActions'

class DeleteStore {
  constructor () {
    this.bindActions(DeleteActions)

    this.work = {
      name: '',
      workContent: '',
      workAnalysis: '',
      workType: 'lyrics',
    }

    this.workType = 'Произведение като тескт'
  }

  onWorkGetSuccess (data) {
    this.work.workContent = data.paragraphs ? data.paragraphs.join('\n') : data.workContent
    this.work.workAnalysis = data.analysis.join('\n')
    this.work.name = data.name
    this.work.workType = this.work.workType ? this.work.workType : 'lyrics'

    if(data.paragraphs) {
      this.work.workType = "lyrics"
      this.workType = 'Произведение като текст'
    } else {
      this.work.workType = "normal"
      this.workType = 'Произведение като линк'
    }
  }

  onWorkGetFail (err) {
    console.log(err)
  }
}

export default alt.createStore(DeleteStore, 'WorksDeleteStore')

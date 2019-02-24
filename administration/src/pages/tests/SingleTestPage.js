import React from 'react'
import { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import { Link } from 'react-router-dom'
import QuestionCard from '../../components/subcomponents/tests/QuestionCard'
import SinglePageStore from '../../stores/tests/SinglePageStore'
import SinglePageActions from '../../actions/tests/SingleTestPageActions'

export default class SingleTestPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = SinglePageStore.getState()
  }

  componentWillMount () {
    SinglePageStore.listen(this.onChange)

    window.scrollTo(0, 0)

    const testID = this.props.match.params.id

    SinglePageActions.getTest(testID)
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    SinglePageStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  generateLeftColumn () {
    let questionSize = Math.floor(this.state.questions.length / 2)

    if (this.state.questions.length % 2 !== 0 && this.state.questions.length !==
      0)
      questionSize = Math.floor(this.state.questions.length / 2) + 1

    let questionsCard = []
    for (let i = 0; i < questionSize; i++) {
      let question = this.state.questions[i]

      questionsCard.push(
        <QuestionCard key={question._id}
                      possibleAnswers={question.possibleAnswers}
                      indexOfAnswer={question.indexOfAnswer}
                      text={question.text}
                      questionID={question._id}
                      testID={this.props.match.params.id}
        />,
      )
    }

    return questionsCard
  }

  generateRightColumn () {
    let questionStart = Math.ceil(this.state.questions.length / 2)

    let questionsCard = []

    for (let i = questionStart; i < this.state.questions.length; i++) {
      let question = this.state.questions[i]

      questionsCard.push(
        <QuestionCard key={question._id}
                      possibleAnswers={question.possibleAnswers}
                      indexOfAnswer={question.indexOfAnswer}
                      text={question.text}
                      questionID={question._id}
                      testID={this.props.match.params.id}
        />,
      )
    }

    return questionsCard
  }

  render () {
    const testID = this.props.match.params.id

    return (
      <div>
        <DarkBackgroundWithText
          text={'Тук може да редактирате избрания от вас тест'} smallText={''}/>


        <section className={'module pb-0'} style={{minHeight: '655px'}}>
          <div className="container">
            <div className='row'>
              <div className='col-md-2 col-md-offset-5 col-sm-offset-5'>
                <div className="menu-detail font-serif"
                     style={{marginBottom: '100px'}}>
                  <Link
                    className='btn btn-success'
                    to={`/administration/tests/add-answer/${testID}`}>
                    Добавете нов въпрос
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 col-sm-offset-5">
                <div className="alt-module-subtitle"><span
                  className="holder-w"/>
                  <h5 className="font-serif">Име на теста</h5><span
                    className="holder-w"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="module-title font-alt">Въпросите и техните
                  отговори</h2>
              </div>
            </div>

            <div className="row multi-columns-row">
              <div className="col-sm-6">

                {this.generateLeftColumn()}

              </div>

              {/*NEXT COLUMN STARTS HERE*/}
              <div className="col-sm-6">

                {this.generateRightColumn()}


              </div>
            </div>
          </div>

        </section>

        <hr/>

      </div>
    )
  }
}

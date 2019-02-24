import React, { Component } from 'react'
import QuestionCard from '../components/sub-components/Tests/QuestionCard'
import SingleTestPageStore from '../stores/Tests/SingleTestPageStore'
import SingleTestPageActions from '../actions/Tests/SingleTestPageActions'
import { Link } from 'react-router-dom'

export default class SingleTestPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.checkAnswers = this.checkAnswers.bind(this)
    this.state = SingleTestPageStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    SingleTestPageStore.listen(this.onChange)

    const testID = this.props.match.params.id

    SingleTestPageActions.getTest(testID)
  }

  componentWillUnmount () {
    SingleTestPageStore.unlisten(this.onChange)
  }

  generateQuestionCards () {
    let questionCards = []

    for (let i = 0; i < this.state.test.questions.length; i++) {
      questionCards.push(
        <QuestionCard question={this.state.test.questions[i]} key={i}
                      handleChange={this.handleChange.bind(this)}/>,
      )
    }

    return questionCards
  }

  checkAnswers () {
    SingleTestPageActions.checkAnswersClicked()
  }

  handleChange (questionId, possibleAnswer, answerIndex, ...restOfParams) {

    SingleTestPageActions
      .radioButtonClicked(questionId, possibleAnswer, answerIndex)
  }

  render () {
    return (
      <div>
        <header
          className="header-home header-home--color header-home--center-content">
          <div className="background background--wave">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2
                    className="header-home__title header-home__title--big">{this.state.test.name}</h2>
                  <p
                    className="header-home__description header-home__description--big header-home__description--calculator">
                    Маркирайте отговорите, които смятате за верни и в края на
                    страницата натиснете бутона "Провери". Сайтът ще преброи
                    вашите верни и грешни върпоси и ще ви покаже ако имате
                    грешка.
                    Ако даден въпрос е оставен празен се смята за грешка.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className='section section--first'>
          <div className='container calculator'>

            <form className='form calculator__card-form'>

              {this.generateQuestionCards()}

            </form>

            <div className='row'>
              <div className='col-6'>
                <button className="site-btn site-btn--accent gradient"
                        onClick={this.checkAnswers}>
                  Провери теста
                </button>
              </div>
              <div className='col-6'
                   style={{display: this.state.showResult ? 'block' : 'none'}}>

                <h4>Резултат:
                  <span>  </span>
                  <span
                    style={{color: 'green'}}>Верни ({this.state.rightAnswers})</span>
                  <span> - </span>
                  <span
                    style={{color: 'red'}}>Грешни ({this.state.wrongAnswers})</span>
                </h4>

                <Link to={`/tests/all`} className="site-btn site-btn--accent"
                      style={{
                        'background': '#f23f57',
                        marginTop: '20px'
                      }}>
                  Върни се към всички тестове
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import TestCard from '../components/sub-components/Tests/TestCard'
import TestsHomePageStore from '../stores/Tests/TestsHomePageStore'
import TestsHomePageActions from '../actions/Tests/TestsHomePageActions'
import MediaQuery from 'react-responsive'

export default class TestsPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.state = TestsHomePageStore.getState()
  }

  componentDidMount () {
    TestsHomePageStore.listen(this.onChange)

    window.scrollTo(0, 0)

    TestsHomePageActions.getAllTests()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillUnmount () {
    TestsHomePageStore.unlisten(this.onChange)
  }

  handleSearchChange (e) {
    TestsHomePageActions.sortTests(e.target.value)
  }

  generateTestCards () {
    let testCards = []

    let tests = this.state.searchedTests.sort(
      (a, b) => new Date(b.date) - new Date(a.date))

    for (let i = 0; i < tests.length; i++) {
      let test = tests[i]
      testCards.push(
        <TestCard
          testID={test._id}
          date={test.date}
          testName={test.name}
          key={test._id}
        />,
      )
    }

    if (tests.length === 0)
      return <h1>Няма намерени резултати от търсенето</h1>

    return testCards
  }

  render () {
    let searchBar = <div className="col-offset-1 col-3 col-m-4" style={{marginBottom: '50px'}}>
      <div className="card form">
        <p className="card__title">Търсене</p>
        <form className="form_form">
          <div
            className="form__form-group form__form-group--without-label">
            <input className="form__input js-field__search"
                   type="text"
                   placeholder="Потърсете тест по име .... "
                   onChange={this.handleSearchChange}
            />

            <span className="form__input-icon"><i
              className="mdi mdi-magnify"/></span>
          </div>
        </form>
      </div>
    </div>

    return (
      <div>
        <section className="section">

          <div className="container">
            <div className="row blog blog--section">

              <MediaQuery maxWidth={767}>
                {searchBar}
              </MediaQuery>

              <div className="col-8 col-m-8">
                <div className="blog__wrap">
                  {this.generateTestCards()}
                </div>
              </div>

              <MediaQuery minWidth={767}>
                {searchBar}
              </MediaQuery>
            </div>
            <hr/>
          </div>
        </section>
      </div>
    )
  }
}

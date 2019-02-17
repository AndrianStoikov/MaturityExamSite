import React from 'react'
import { Component } from 'react'
import TestCard from '../components/sub-components/Tests/TestCard'
import TestsHomePageStore from '../stores/Tests/TestsHomePageStore'
import TestsHomePageActions from '../actions/Tests/TestsHomePageActions'

export default class TestsPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = TestsHomePageStore.getState()
  }

  componentDidMount () {
    TestsHomePageStore.listen(this.onChange)

    window.scrollTo(0, 0);

    TestsHomePageActions.getAllTests()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillUnmount () {
    TestsHomePageStore.unlisten(this.onChange)
  }

  render () {

    let testCards = []

    for (let i = 0; i < this.state.tests.length; i++) {
      let test = this.state.tests[i]
      testCards.push(
        <TestCard testID={test._id} date={test.date} testName={test.name} key={test._id}/>
      )
    }

    return (
      <div>
        <section className="section">

          <div className="container">
            <div className="row blog blog--section">
              <div className="col-8 col-m-8">
                <div className="blog__wrap">
                  {testCards}
                </div>

                {/*TODO: Implement the Older Posts*/}
                {/*<div className="blog__btn-toolbar">*/}
                  {/*<a className="site-btn site-btn--light blog__btn-prev">Older*/}
                    {/*Posts</a>*/}

                {/*</div>*/}
              </div>

              <div className="col-offset-1 col-3 col-m-4">
                <div className="card form">
                  <p className="card__title">Search</p>
                  <form className="form_form">
                    <div
                      className="form__form-group form__form-group--without-label">
                      <input className="form__input js-field__search"
                             type="text" placeholder="I am looking for..."/>

                      <span className="form__input-icon"><i
                        className="mdi mdi-magnify"/></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </section>
      </div>
    )
  }
}

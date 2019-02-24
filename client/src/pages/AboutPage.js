import React, { Component } from 'react'
import CreditsPageActions from '../actions/Credits/CreditsPageActions'
import CreditsPageStore from '../stores/Credits/CreditsPageStore'
import AboutInformation
  from '../components/sub-components/Credits/AboutInformation'

export default class AboutPage extends Component {
  constructor (props) {
    super(props)

    this.state = CreditsPageStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    CreditsPageStore.listen(this.onChange)

    CreditsPageActions.getCredits()
  }

  componentWillUnmount () {
    CreditsPageStore.unlisten(this.onChange)
  }

  generateCredits () {
    let credits = []

    for (let i = 0; i < this.state.credits.length; i++) {
      credits.push(
        <AboutInformation
          text={this.state.credits[i].text}
          description={this.state.credits[i].description}
          key={i}
        />,
      )
    }

    return credits
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
                    className="header-home__title header-home__title--big">
                    Всички материали, които са използвани в сайта
                  </h2>

                  {this.generateCredits()}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

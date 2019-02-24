import React, { Component } from 'react'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import CreditCard from '../../components/subcomponents/credits/CreditCard'
import CreditsPageStore from '../../stores/credits/CreditsPageStore'
import CreditsPageActions from '../../actions/credits/CreditsPageActions'
import { Link } from 'react-router-dom'

export default class CreditsPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = CreditsPageStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    CreditsPageStore.listen(this.onChange)

    window.scrollTo(0, 0)

    CreditsPageActions.getCredits()
      .catch((err) => {
        this.props.history.push(
          `/administration/error?statusCode=${err.statusCode}&message=${err.error.response}`)
      })
  }

  componentWillUnmount () {
    CreditsPageStore.unlisten(this.onChange)

  }

  generateCreditCards () {
    let cards = []

    for (let i = 0; i < this.state.credits.length; i++) {
      cards.push(
        <CreditCard text={this.state.credits[i].text}
                    description={this.state.credits[i].description}
                    creditId={this.state.credits[i]._id}
                    key={i}/>,
      )
    }

    return cards
  }

  render () {
    return (
      <div>
        <DarkBackgroundWithText
          text={'Тук се показва информацията за всички материали, които са използвани в сайта'}/>

        <div className='container'>

          <div className="row">
            <div className="col-md-2 col-md-offset-5 col-sm-offset-5">
              <div className="menu-detail font-serif"
                   style={{marginBottom: '100px', marginTop: '100px'}}>
                <Link className="btn btn-success" to="/administration/credits/create">
                  Добавете нов материал
                </Link>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12' style={{marginTop: '40px'}}>
              {this.generateCreditCards()}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

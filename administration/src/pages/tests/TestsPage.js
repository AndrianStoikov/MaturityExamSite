import React from 'react'
import { Component } from 'react'
import TestsPageStore from '../../stores/tests/TestsPageStore'
import TestsPageActions from '../../actions/tests/TestsPageActions'
import TestCard from '../../components/subcomponents/tests/TestCard'
import DarkBackgroundWithText
  from '../../components/subcomponents/styled/DarkBackgroundWithText'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'

// TODO: IMPLEMENT TEST DELETION AND CREATION
export default class TestsPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = TestsPageStore.getState()
  }

  onChange (state) {
    this.setState(state)
  }

  componentWillMount () {
    TestsPageStore.listen(this.onChange)

    window.scrollTo(0, 0)

    TestsPageActions.getTests()
  }

  componentWillUnmount () {
    TestsPageStore.unlisten(this.onChange)
  }

  generateTestCards () {
    let testCards = []

    for (let i = 0; i < this.state.tests.length; i++) {
      const test = this.state.tests[i]

      testCards.push(
        <TestCard name={test.name} testID={test._id} key={test._id}/>,
      )
    }

    return testCards
  }

  render () {

    const testCards = this.generateTestCards()

    const imagesLoadedOptions = { background: '.background-image' }

    return (
      <div>

        <DarkBackgroundWithText
          text={'На тази страница се показват всички тестове'}
          smallText={'Може да добавите и нови от менюто'}/>

        <section className="module pb-0" id="works">
          <div className="container">

            <div className='row'>
              <div className='col-md-2 col-md-offset-5 col-sm-offset-5'>
                <div className="menu-detail font-serif"
                     style={{marginBottom: '100px'}}>
                  <Link
                    className='btn btn-success'
                    to={`/administration/tests/add`}>
                    Добавете нов тест
                  </Link>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Редактирайте тест като
                  кликнете върху него</h2>
                <div className="module-subtitle font-serif"/>
              </div>
            </div>
          </div>

          <div className="container">
            <Masonry
              className={'works-grid works-grid-gut works-grid-3 works-hover-d'}
              elementType={'ul'}
              imagesLoadedOptions={imagesLoadedOptions}
            >
              {testCards}
            </Masonry>

            {/*<ul className="works-grid works-grid-gut works-grid-3 works-hover-d"*/}
            {/*id="works-grid"*/}
            {/*style={{'position': 'relative', 'height': '319.5px'}}>*/}

            {/*{testCards}*/}

            {/*</ul>*/}

          </div>
        </section>

        <hr style={{marginBottom: '60px'}}/>

      </div>
    )
  }
}

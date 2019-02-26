import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

export default class TestCard extends Component {
  render () {
    let date = new Date(this.props.date)
    let dateToString = date.toLocaleString('bg', {month: 'long'})

    const monthName = dateToString.substr(0, 1).toUpperCase() +
      dateToString.substr(1)

    const dateName = `${date.getDate()} ${monthName}, ${date.getFullYear()}`

    return (
      <div className="blog__item card">
        <Link to={`/tests/${this.props.testID}`}
              className="blog__item-link"/>
        {/*TODO: Set proper image*/}
        <div className="blog__item-img-wrap" style={{
          backgroundImage: 'url(/images/test.jpg)',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="blog__item-img"/>
        </div>
        <div className="blog__item-content"><Link
          to={`/tests/${this.props.testID}`}
          className="blog__item-content-category link link--accent">{this.props.testCategory
          ? this.props.testCategory
          : 'Български език и литература'}</Link>

          <MediaQuery minWidth={500}>
            <p className="blog__item-content-date">{dateName
              ? dateName
              : '12.02.2018г.'}</p>
          </MediaQuery>


          <h4 className="blog__item-content-title">{this.props.testName
            ? this.props.testName
            : 'Тест'}</h4>
          <p className="blog__item-content-preview">
            Тестовете са направени с цел ползвателите на сайта да се упражнят
            върху нещата, който са прочели и научили.
          </p>
        </div>
      </div>
    )
  }
}

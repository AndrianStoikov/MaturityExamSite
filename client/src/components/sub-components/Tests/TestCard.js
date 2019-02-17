import React from 'react'
import { Component } from 'react'

export default class TestCard extends Component {
  render () {
    let date = new Date(this.props.date)
    let dateToString = date.toLocaleString('bg', { month: 'long' })

    const monthName = dateToString.substr(0, 1).toUpperCase() + dateToString.substr(1)

    const dateName = `${date.getDay()} ${monthName}, ${date.getFullYear()}`;

    return (
      <div className="blog__item card">
        <a href="/"
           className="blog__item-link"/>
            {/*TODO: Set proper image*/}
        <div className="blog__item-img-wrap" style={{backgroundImage: "url(https://previews.123rf.com/images/asawinklabma/asawinklabma1611/asawinklabma161100034/66428498-a-pencil-sitting-on-a-test-bubble-sheet-optical-form-of-an-examination-answer-sheet-with-pencil-stan.jpg)"}}>
          <div className="blog__item-img"/>
        </div>
        <div className="blog__item-content"><a href={'/'}
          className="blog__item-content-category link link--accent">{this.props.testCategory
          ? this.props.testCategory
          : 'Български език и литература'}</a>

          <p className="blog__item-content-date">{dateName
            ? dateName
            : '12.02.2018г.'}</p>
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

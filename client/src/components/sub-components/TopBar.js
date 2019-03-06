import React from 'react'
import { Component } from 'react'

const uuidv4 = require('uuid/v4')

export default class TopBar extends Component {
  parseAuthorBiography () {
    let biographyArray = this.props.biography.split('\n')

    let biographyElements = []
    for (let i = 0; i < biographyArray.length; i++) {
      biographyElements.push(
        <p key={i}>
          {biographyArray[i]}
        </p>,
      )
    }

    return biographyElements
  }

  parseAuthorWorks () {
    let works = this.props.works
    let normalWorks = this.props.normalWorks

    let workElements = []

    for (let i = 0; i < this.props.works.length; i++) {
      let work = (
        <div id={`work${i}`} className="faq__chapter chapter"
             key={works[i]._id}>
          <h3 className="faq__chapter-title">{works[i].name}</h3>
          <div className="faq__card card">
            <h4 className="faq__card-title">Произведение
              <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
            </h4>
            <div className="faq__card-description align-left">
              {this.generateParagraphs(works[i].paragraphs)}
            </div>
          </div>

          <div className="faq__card card">
            <h4 className="faq__card-title">Анализ
              <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
            </h4>
            <div className="faq__card-description align-left">
              {this.generateParagraphs(works[i].analysis)}
            </div>
          </div>
        </div>
      )

      workElements.push(work)
    }

    for (let i = 0, index = works.length; i < normalWorks.length; i++, index++) {
      let work = (
        <div id={`work${i}`} className="faq__chapter chapter"
             key={normalWorks[i]._id}>
          <h3 className="faq__chapter-title">{normalWorks[i].name}</h3>
          <div className="faq__card card">
            <h4 className="faq__card-title">Произведение
              <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
            </h4>
            <div className="faq__card-description align-left">
              <a
                href={normalWorks[i].workContent}
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'blue', fontSize: '19px'}}
              >
              {normalWorks[i].workContent}
              </a>
            </div>
          </div>

          <div className="faq__card card">
            <h4 className="faq__card-title">Анализ
              <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
            </h4>
            <div className="faq__card-description align-left">
              {this.generateParagraphs(normalWorks[i].analysis)}
            </div>
          </div>
        </div>
      )

      workElements.push(work)
    }

    return workElements
  }

  generateSideNavigation () {
    let works = this.props.works
    let normalWorks = this.props.normalWorks

    let navItems = []
    for (let i = 0; i < works.length; i++) {
      navItems.push(
        <li className="sidebar__item" key={i}>
          <a href={`#work${i}`}>{works[i].name}</a>
        </li>,
      )
    }

    for (let i = 0, index = works.length; i < normalWorks.length; i++, index++) {
       navItems.push(
         <li className="sidebar__item" key={index}>
           <a href={`#work${index}`}>{normalWorks[i].name}</a>
         </li>,
       )
    }

    return navItems
  }

  containsRomanNumeral (string) {
    if (string === '') {
      return false
    }

    let regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

    return regex.test(string)
  }

  buildParagraph (paragraph, matches) {
    let whiteSpaces = []

    for (let i = 0; i < matches.length; i++) {
      whiteSpaces.push(<span key={uuidv4()}>&nbsp;</span>)
      whiteSpaces.push(<span key={uuidv4()}>&nbsp;</span>)
    }

    return <p key={uuidv4()}>{whiteSpaces}{paragraph}</p>
  }

  generateParagraphs (paragraphs) {
    let pTags = []

    for (let i = 0, j = 0; i < paragraphs.length; i++, j++) {
      if ((paragraphs[i].length > 0 && paragraphs[i].indexOf('*') !== -1) ||
        this.containsRomanNumeral(paragraphs[i])) {
        pTags.push(<p key={uuidv4()}>
          <span>&nbsp;</span>
        </p>)

        pTags.push(<p key={uuidv4()}
                      style={{
                        textAlign: 'center',
                        fontSize: 20 + 'px',
                        color: 'black',
                      }}>
          <strong>{paragraphs[i]}</strong>
        </p>)

        pTags.push(<p key={uuidv4()}>
          <span>&nbsp;</span>
        </p>)

        continue
      }

      if (paragraphs[i] === '') {
        pTags.push(<p key={i}>
          <span>&nbsp;</span>
        </p>)

        continue
      }

      let reg = / {2}/g
      let paragraph = paragraphs[i]

      let matches = paragraph.match(reg)

      if (matches !== null) {
        pTags.push(this.buildParagraph(paragraph, matches))

        continue
      }

      pTags.push(
        <p key={i}>
          {paragraphs[i]}
        </p>,
      )
    }

    return pTags
  }

  render () {

    let biographyElements = this.parseAuthorBiography()

    let workElements = this.parseAuthorWorks()

    let sideNavigationElements = this.generateSideNavigation()

    return (
      <section className="section section--first">
        <div className="container">
          <div className="row faq">
            <div id="top" className="col-9 col-t-12">
              <div className="faq__content">

                <div id="биография" className="faq__chapter chapter">
                  <h3
                    className="faq__chapter-title">{this.props.authorName}</h3>
                  <div className="faq__card card">
                    <h4 className="faq__card-title">Биография
                      <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
                    </h4>
                    <div className="faq__card-description align-left">
                      {biographyElements}
                    </div>
                  </div>
                </div>
                {workElements}
              </div>
            </div>
            <div className="col-3 d-t-none">
              <nav className="sidebar" style={{'width': 360 + 'px'}}>
                <ul className="sidebar__list"
                    style={{'fontFamily': 'Open Sans, sans-serif'}}>
                  <li className="sidebar__item active">
                    <a href="#биография">Биография</a>
                  </li>
                  {sideNavigationElements}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

import React from 'react'
import { Component } from 'react'

export default class TopBar extends Component {
  parseAuthorBiography () {
    let biographyArray = this.props.biography.split('\n')

    let biographyElements = []
    for (let i = 0; i < biographyArray.length; i++) {
      biographyElements.push(
        <p key={i}>
          {biographyArray[i]}
        </p>
      )
    }

    return biographyElements
  }

  parseAuthorWorks () {
    let works = this.props.works

    let workElements = []
    for (let i = 0; i < this.props.works.length; i++) {

      let work = <div id={`work${i}`} className="faq__chapter chapter" key={works[i]._id}>
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
          <div className="faq__card-description">
            {this.generateParagraphs(works[i].analysis)}
          </div>
        </div>
      </div>


      workElements.push(work)
    }

    return workElements
  }

  generateSideNavigation () {
    let works = this.props.works


    let navItems = []
    for (let i = 0; i < works.length; i++) {
      navItems.push(
        <li className="sidebar__item" key={i}>
          <a href={`#work${i}`}>{works[i].name}</a>
        </li>
      )
    }

    return navItems
  }

  generateParagraphs (paragraphs) {
    let pTags = []

    for (let i = 0; i < paragraphs.length; i++) {
      pTags.push(
        <p key={i}>
          {paragraphs[i] !== '' ? paragraphs[i] : <span>&nbsp;</span>}
        </p>
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
                    <h3 className="faq__chapter-title">{this.props.authorName}</h3>
                    <div className="faq__card card">
                      <h4 className="faq__card-title">Биография
                        <span className="faq__card-icon">
                          <i className="mdi mdi-chevron-down"/>
                        </span>
                      </h4>
                      <div className="faq__card-description">
                        {biographyElements}
                      </div>
                    </div>
                  </div>
                  {workElements}
                </div>
              </div>
              <div className="col-3 d-t-none">
                <nav className="sidebar" style={{'width': 360 + 'px'}}>
                  <ul className="sidebar__list">
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

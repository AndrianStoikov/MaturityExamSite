import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AuthorBiography extends Component {
  parseBiography () {
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

  render () {

    return (
      <section className="module pt-0 pb-0" id="about">
        <div className="row position-relative m-0">

          {/*data-background="assets/images/section-14.jpg"*/}
          {/*style="background-image: url(&quot;assets/images/section-14.jpg&quot;);"*/}
          <div className="col-xs-12 col-md-6 side-image"/>
          <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="module-title font-alt align-left">
                  {
                    this.props.name && this.props.cyrillicName
                      ? `${this.props.name} - ${this.props.cyrillicName}`
                      : ' '
                  }
                </h2>
                <div className="module-subtitle font-serif align-left">
                  {this.props.shortBiography}
                </div>

                {this.parseBiography()}


                <div className="menu-detail font-serif"
                     style={{marginBottom: '30px'}}>
                  <Link
                    className='btn btn-success'
                    to={`/administration/authors/edit/${this.props.authorParsedName}?authorName=${this.props.authorParsedName}`}>
                    Редактирай
                    автора
                  </Link>
                </div>

                {/*<div className="menu-detail font-serif"><Link*/}
                  {/*className='btn btn-danger'*/}
                  {/*to={`/administration/authors/delete/${this.props.id}`}>Изтрии*/}
                  {/*всичко за автора</Link></div>*/}

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const uuidv4 = require('uuid/v4')

export default class WorkPanel extends Component {

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
    let editAndDeleteButtons = []

    if (this.props.setEditButtons === true) {
      editAndDeleteButtons.push(
        <div className="menu-detail font-serif" style={{marginBottom: '15px'}}
             key={1}>
          <Link
            className='btn btn-success'
            to={`/administration/work/edit/${this.props.workId}?authorName=${this.props.authorName}&workType=${this.props.workType}`}>
            Редактирай
          </Link>
        </div>,
      )

      editAndDeleteButtons.push(
        <div className="menu-detail font-serif" key={2}>
          <Link className='btn btn-danger'
                to={`/administration/work/delete/${this.props.workId}?authorName=${this.props.authorName}&workType=${this.props.workType}`}
                style={{marginBottom: '15px'}}>
            Изтрии
          </Link>
        </div>,
      )
    }

    return (
      <div className='col-sm-12'>
        <h4 className="font-alt mb-30">{this.props.name}</h4>

        {editAndDeleteButtons}

        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title font-alt"><a
                data-toggle="collapse" data-parent="#accordion"
                href={`#${this.props.workId}Произведение`} aria-expanded="false"
                className="collapsed">{'Произведение'}</a></h4>
            </div>
            <div className="panel-collapse collapse"
                 id={`${this.props.workId}Произведение`}
                 aria-expanded="false" style={{height: '0px'}}>
              <div className="panel-body no-margin font-big">
                {
                  this.props.paragraphs ?
                    this.generateParagraphs(this.props.paragraphs) :
                    <a
                      href={this.props.workContent}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: 'blue'}}
                    >
                      {this.props.workContent}
                    </a>
                }

              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title font-alt"><a
                data-toggle="collapse" data-parent="#accordion"
                href={`#${this.props.workId}Анализ`} aria-expanded="false"
                className="collapsed">{'Анализ'}</a></h4>
            </div>
            <div className="panel-collapse collapse"
                 id={`${this.props.workId}Анализ`}
                 aria-expanded="false" style={{height: '0px'}}>
              <div className="panel-body no-margin font-big">
                {this.generateParagraphs(this.props.analysis)}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

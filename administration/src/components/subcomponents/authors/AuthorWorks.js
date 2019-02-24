import React, { Component } from 'react'
import WorkPanel from './WorkPanel'
import { Link } from 'react-router-dom'

export default class AuthorWorks extends Component {

  buildWorks () {
    let workPanels = []

    for (let i = 0; i < this.props.works.length; i++) {
      let work = this.props.works[i]

      workPanels.push(
        <WorkPanel
          workType={'lyrics'}
          name={work.name}
          paragraphs={work.paragraphs}
          analysis={work.analysis} key={i}
          workId={work._id}
          setEditButtons={this.props.setEditButtons}
          authorName={this.props.authorName}
        />,
      )
    }

    return workPanels
  }

  buildNormalWorks () {
    let normalWorksPanel = []

    for (let i = 0; i < this.props.normalWorks.length; i++) {
      let work = this.props.normalWorks[i]

      normalWorksPanel.push(
        <WorkPanel
          workType={'normal'}
          name={work.name}
          workContent={work.workContent}
          analysis={work.analysis} key={i}
          workId={work._id}
          setEditButtons={this.props.setEditButtons}
          authorName={this.props.authorName}
        />,
      )
    }

    return normalWorksPanel
  }

  render () {
    return (
      <section className='module'>
        <div className='container'>
          <div className='row'>

            <div className='col-sm-12'>
              <div className="menu-detail" style={{marginBottom: '15px'}}
                   key={1}>
                <Link
                  className='btn btn-info'
                  to={`/administration/authors/${this.props.id}/add-work?authorName=${this.props.authorName}`}>
                  Добави ново произведение
                </Link>
              </div>

              <hr/>
            </div>

            {this.buildWorks()}

            {this.buildNormalWorks()}

          </div>
        </div>
      </section>
    )
  }
}

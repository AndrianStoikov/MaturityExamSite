import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div>
        <hr className="divider-d"/>
        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="copyright font-alt">&copy; 2019&nbsp;<a
                  href="/">Матурата</a>, All Rights Reserved</p>
              </div>
              <div className="col-sm-6">
                <div className="footer-social-links">
                  <a href="#totop"> <i className="fa fa-facebook"/></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="scroll-up">
          <a href="#totop">
            <i className="fa fa-angle-double-up"/>
          </a>
        </div>
      </div>
    )
  }
}

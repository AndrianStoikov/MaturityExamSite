import React from 'react'
import {Component} from 'react'

export default class SearchForms extends Component {
  render () {
    return (
      <div>
        <div className="card form">
          <p className="card__title">Categories</p>
          <form className="form__form js-form-category">
            <div
              className="form__form-group form__form-group--without-label">
              <input type="text" autoComplete="off"
                     className="form__input form__input--select js-field__category es-input"
                     title="category" placeholder="Select category..."/>
              <div className="form__input-icon-wrap">
                          <span className="form__input-icon"><i
                            className="mdi mdi-chevron-down"/></span>
              </div>
              <ul className="es-list">
                <li className="es-visible">Updates</li>
                <li className="es-visible">Tutorials</li>
                <li className="es-visible">Our Platform</li>
                <li className="es-visible">Changelog</li>
                <li className="es-visible">Security</li>
              </ul>
            </div>
          </form>
        </div>

        <div className="card">
          <p className="card__title">Most popular</p>
          <a className="popular" href="../posts/01_video_post.html">
            {/*style="background-image: url(../assets/img/blog/19_blog_img_2.jpg)"*/}
            <div className="popular__img"
            />
            <p className="popular__title">How to Setup Sigma in 10
              minutes (Video Tutorial)</p>
          </a>
          <a className="popular" href="../posts/02_gallery_post.html">
            {/*style="background-image: url(../assets/img/blog/19_blog_img_3.jpg)"*/}
            <div className="popular__img"
            />
            <p className="popular__title">Sigma API Released v 3.0.2,
              Change IP Address Feature</p>
          </a>
          <a className="popular" href="../posts/03_standard_post.html">
            {/*style="background-image: url(../assets/img/blog/19_blog_img_1.jpg)"*/}
            <div className="popular__img"
            />
            <p className="popular__title">Sigma PRO 3.1.5 update, news
              and support</p>
          </a>
        </div>

        <div className="card">
          <p className="card__title">Tags</p>
          <div className="tags">
            <button
              className="site-btn site-btn--light tags__tag">Android
            </button>
            <button className="site-btn site-btn--light tags__tag">API
            </button>
            <button className="site-btn site-btn--light tags__tag">App
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Backup
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Cloud
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Changelog
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Control
              panel
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Design
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Development
            </button>
            <button
              className="site-btn site-btn--light tags__tag">E-mail
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Features
            </button>
            <button className="site-btn site-btn--light tags__tag">How
              to
            </button>
            <button className="site-btn site-btn--light tags__tag">iOS
            </button>
            <button className="site-btn site-btn--light tags__tag">IP
              address
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Landing
              page
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Messanger
            </button>
            <button
              className="site-btn site-btn--light tags__tag">News
            </button>
            <button className="site-btn site-btn--light tags__tag">PHP
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Server
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Setup
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Update
            </button>
            <button className="site-btn site-btn--light tags__tag">UI /
              UX
            </button>
            <button
              className="site-btn site-btn--light tags__tag">Video
            </button>
            <button className="site-btn site-btn--light tags__tag">Web
              application
            </button>
            <button
              className="site-btn site-btn--light tags__tag">WordPress
            </button>
            <button
              className="site-btn site-btn--light tags__tag">YouTube
            </button>
          </div>
        </div>

        <div className="card form">
          <p className="card__title">Archive</p>
          <form className="form__form js-form-date">
            <div
              className="form__form-group form__form-group--without-label">
              <input type="text" autoComplete="off"
                     className="form__input form__input--select js-field__month es-input"
                     title="month" placeholder="Select month..."/>
              <div className="form__input-icon-wrap">
                          <span className="form__input-icon"><i
                            className="mdi mdi-chevron-down"/></span>
              </div>
              <ul className="es-list">
                <li className="es-visible">March 2018</li>
                <li className="es-visible">February 2018</li>
                <li className="es-visible">January 2018</li>
                <li className="es-visible">December 2017</li>
                <li className="es-visible">November 2017</li>
                <li className="es-visible">October 2017</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

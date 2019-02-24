import React, {Component} from 'react'

export default class Services extends Component {
  render () {
    return (
      <section className="module" id="services">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-sm-offset-5">
              <div className="alt-module-subtitle"><span className="holder-w"></span>
                <h5 className="font-serif">For your comfort</h5><span className="holder-w"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <h2 className="module-title font-alt">Our Services</h2>
            </div>
          </div>
          <div className="row multi-columns-row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="features-item">
                <div className="features-icon"><span className="icon-clock"></span></div>
                <h3 className="features-title font-alt">Opened 24/7</h3>Careful attention to detail and clean, well
                structured code ensures a smooth user experience for all your visitors.
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="features-item">
                <div className="features-icon"><span className="icon-streetsign"></span></div>
                <h3 className="features-title font-alt">Free parking</h3>Careful attention to detail and clean, well
                structured code ensures a smooth user experience for all your visitors.
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="features-item">
                <div className="features-icon"><span className="icon-map"></span></div>
                <h3 className="features-title font-alt">Central Location</h3>Careful attention to detail and clean,
                well structured code ensures a smooth user experience for all your visitors.
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="features-item">
                <div className="features-icon"><span className="icon-heart"></span></div>
                <h3 className="features-title font-alt">High quality</h3>Careful attention to detail and clean, well
                structured code ensures a smooth user experience for all your visitors.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
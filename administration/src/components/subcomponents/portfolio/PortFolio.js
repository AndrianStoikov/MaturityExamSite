import React from 'react'

export default class PortFolio extends React.Component {
  render () {
    const divStyle = {
         backgroundImage: 'url("assets/images/agency/agency_bg.jpg")',
    }

    return (
      <section className="home-section home-parallax home-fade home-full-height bg-dark-60 agency-page-header" id="home" style={divStyle}>
        <div className="titan-caption">
          <div className="caption-content">
            <div className="font-alt mb-30 titan-title-size-1">Администраторски панел</div>
            <div className="font-alt mb-40 titan-title-size-3">
              Опитай <span className="rotate">бързо | лесно | достъпно</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

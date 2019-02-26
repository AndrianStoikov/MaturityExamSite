import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class MobileNavbar extends Component {

  handleHomeClick () {
    if (this.props.location.pathname === '/')
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  render () {
    return (
      <div className="mobile-menu d-none d-t-block">
        <div className="container">
          <div className="mobile-menu__logo">
            <svg className="menu__logo-img" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="48" height="48"
                 viewBox="0 0 515.3 541.9"
                 style={{enableBackground: 'new 0 0 515.3 541.9'}}>
              <style type="text/css">
              </style>
              <g id="Layer_1">
              </g>
              <g id="Layer_2">
                <g>
                  <g id="XMLID_1_">
                    <g>
                      <path d="M234.3,431.1c0,0-10.1-43.7,24.5-100.3S418.3,181.5,441.2,150c0,0-20.1,138.4-61.9,184.5
					c-42.2,46.6-46.9,60.8-131.7,104.5c0,0-6.4-3.7-47.5,56c0,0-4.3-3.7,26.7-53.9c0,0,0,8.5,3.2,6.4c0.6-0.4,4.1-5.1,9.1-12.5
					c19.9-28.9,65.4-98.7,70.9-112.6c0,0,39-54.3,65.4-85.5c10.6-11.4,17.4-18.4,18.3-19.2c-4.3,3.3-10.8,10.3-18.3,19.2
					C340.8,274.3,266.4,359.1,234.3,431.1z"/>
                    </g>
                    <g>
                      <path className="st0" d="M393.6,217.8c-0.8,0.8-7.7,7.8-18.3,19.2c-34.6,37.3-108.9,122-141.1,194c0,0-10.1-43.7,24.5-100.3
					S418.3,181.5,441.2,150c0,0-20.1,138.4-61.9,184.5c-42.2,46.6-46.9,60.8-131.7,104.5c0,0-6.4-3.7-47.5,56c0,0-4.3-3.7,26.7-53.9
					c0,0,0,8.5,3.2,6.4c0.6-0.4,4.1-5.1,9.1-12.5c19.9-28.9,65.4-98.7,70.9-112.6c0,0,39-54.3,65.4-85.5
					C382.9,228.2,389.4,221.1,393.6,217.8C393.7,217.8,393.7,217.7,393.6,217.8"/>
                    </g>
                  </g>
                  <path className="st1" d="M196.4,490.8c0,0,114.2,13.3,133.1,11.2c18.9-2.1,39.7-3.7,39.7-11.2c0-7.5,1.1-16-58.7-23.5
			c0,0,76.8-3.2,151.5,12.8c0,0-132.8-46.8-184.5-15.5c0,0-15.5,8.5,72.5,22.9C350,487.6,263.1,497.2,196.4,490.8z"/>
                </g>
              </g>
            </svg>
          </div>

          <button type="button" className="mobile-menu__close">
            <span><i className="mdi mdi-close" aria-hidden="true"/></span>
          </button>

          {/*eslint-disable-next-line*/}
          <nav className="mobile-menu__wrapper">
            <ul className="mobile-menu__ul">
              <li className="mobile-menu__li">
                <Link to="/"
                      onClick={this.handleHomeClick.bind(this)}
                      className="link link--dark-gray link--gray">Начало</Link>
              </li>
              <li
                className="mobile-menu__li mobile-menu__li-collapse mobile-menu__li-collapse--close">
                {/*eslint-disable-next-line*/}
                <a className="link link--dark-gray">Автори
                  <span><i className="mdi mdi-chevron-down"/></span>
                </a>
              </li>
              <li className="mobile-menu__ul--collapsed">
                <ul className="mobile-menu__ul">

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/atanas-dalchev'}>Атанас Далчев</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/geo-milev'}>Гео
                      Милев</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/elisaveta-bagrqna'}>Елисавета
                      Багряна</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/iordan-iovkov'}>Йордан
                      Йовков</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/hristo-smirnenski'}>Христо
                      Смирненски</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/nikola-vapcarov'}>Никола Вапцаров</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/dimitar-dimov'}>Димитър Димов</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray"
                          to={'/authors/dimitar-talev'}>Димитър Талев</Link>
                  </li>
                </ul>
              </li>

              <li className="mobile-menu__li">
                <Link to="/tests/all"
                      className="link link--dark-gray link--gray">Тестове</Link>
              </li>

              <li className="mobile-menu__li">
                {/*eslint-disable-next-line*/}
                <Link to={'/about'} className="link link--dark-gray link--gray">За
                  сайта</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default withRouter(MobileNavbar)

import { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

export default class MobileNavbar extends Component {
  render () {
    return (
      <div className="mobile-menu d-none d-t-block">
        <div className="container">
          <div className="mobile-menu__logo">
            <svg className="menu__logo-img" xmlns="http://www.w3.org/2000/svg"
                 width="48" height="48" viewBox="0 0 48 48">
              <path data-name="Sigma symbol" className="svg-element"
                    d="M237.418,8583.56a12.688,12.688,0,0,0,.419-3.37c-0.036-5.24-2.691-9.68-7.024-13.2h-3.878a20.819,20.819,0,0,1,4.478,13.01c0,4.56-2.456,10.2-6.413,11.4a16.779,16.779,0,0,1-2.236.51c-10.005,1.55-14.109-17.54-9.489-23.31,2.569-3.21,6.206-4.08,11.525-4.08h17.935A24.22,24.22,0,0,1,237.418,8583.56Zm-12.145-24.45c-8.571.02-12.338,0.98-16.061,4.84-6.267,6.49-6.462,20.69,4.754,27.72a24.092,24.092,0,1,1,27.3-32.57h-16v0.01Z"
                    transform="translate(-195 -8544)"/>
            </svg>
          </div>
          <button type="button" className="mobile-menu__close">
            <span><i className="mdi mdi-close" aria-hidden="true"/></span>
          </button>

          {/*eslint-disable-next-line*/}
          <nav className="mobile-menu__wrapper">
            <ul className="mobile-menu__ul">
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
                    <Link className="link link--gray" to={'/authors/atanas-dalchev'}>Атанас Далчев</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/geo-milev'}>Гео Милев</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/elisaveta-bagrqna'}>Елисавета
                      Багряна</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/iordan-iovkov'}>Йордан
                      Йовков</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/hristo-smirnenski'}>Христо
                      Смирненски</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/nikola-vapcarov'}>Никола Вапцаров</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/dimitar-dimov'}>Димитър Димов</Link>
                  </li>

                  <li className="mobile-menu__li">
                    <Link className="link link--gray" to={'/authors/dimitar-talev'}>Димитър Талев</Link>
                  </li>
                </ul>
              </li>

              <li className="mobile-menu__li">
                <Link to="/tests/all" className="link link--dark-gray link--gray">Тестове</Link></li>

              <li className="mobile-menu__li">
                {/*eslint-disable-next-line*/}
                <a href="" className="link link--dark-gray link--gray">За
                  сайта</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

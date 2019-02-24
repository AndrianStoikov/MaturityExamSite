import { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

export default class MobileNavbar extends Component {
  render () {
    return (
      <div className="mobile-menu d-none d-t-block">
        <div className="container">
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
                <Link to={'/about'} className="link link--dark-gray link--gray">За
                  сайта</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

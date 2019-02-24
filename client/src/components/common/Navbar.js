import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import React from 'react'

class Navbar extends Component {
  render () {
    let currentRoute = this.props.location.pathname
    let navigation

    if (currentRoute === '/') {
      navigation =
        <ul>
          <li>
            <Link to={'/'}
                  className="link link--gray">Начало
            </Link>
          </li>
          <li>
            <Link to={'/tests/all'}
                  className="link link--gray">Тестове
            </Link>
          </li>
        </ul>
    } else {
      navigation =
        <ul>
          <li>
            <Link to={'/'}
                  className="link link--gray">Начало
            </Link>
          </li>
          <li>
            <Link to={'/tests/all'}
                  className="link link--gray">Тестове
            </Link>
          </li>

          <li>
            <div className="menu__dropdown">
              {/* eslint-disable-next-line*/}
              <a className="link link--gray menu__dropdown-btn">Автори
                <span><i className="mdi mdi-chevron-down"/></span>
              </a>
              <div
                className="menu__dropdown-content menu__dropdown-content--home">
                <Link className="link link--gray"
                   to={"/authors/atanas-dalchev"}>Атанас Далчев</Link>
                <Link className="link link--gray"
                   to={"/authors/geo-milev"}>Гео Милев</Link>
                <Link className="link link--gray"
                      to={"/authors/elisaveta-bagrqna"}>Елисавета Багряна</Link>
                <Link className="link link--gray"
                      to={"/authors/iordan-iovkov"}>Йордан Йовков</Link>
                <Link className="link link--gray"
                      to={"/authors/hristo-smirnenski"}>Христо Смирненски</Link>
                <Link className="link link--gray"
                      to={"/authors/nikola-vapcarov"}>Никола Вапцаров</Link>
                <Link className="link link--gray"
                      to={"/authors/dimitar-dimov"}>Димитър Димов</Link>
                <Link className="link link--gray"
                      to={"/authors/dimitar-talev"}>Димитър Талев</Link>
              </div>
            </div>
          </li>
        </ul>
    }

    return (
      <div className="menu">
        <div className="container menu__wrapper">
          <div className="row">
            <div className="menu__logo menu__item">
              <Link to={'/'}>
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Book_icoline.svg/2000px-Book_icoline.svg.png'}
                  alt={'icon'} style={{width: '48px', height: '48px'}}/>
                {/*<svg className="menu__logo-img"*/}
                {/*xmlns="http://www.w3.org/2000/svg" width="48" height="48"*/}
                {/*viewBox="0 0 48 48">*/}
                {/*<path data-name="Sigma symbol" className="svg-element"*/}
                {/*d="M237.418,8583.56a12.688,12.688,0,0,0,.419-3.37c-0.036-5.24-2.691-9.68-7.024-13.2h-3.878a20.819,20.819,0,0,1,4.478,13.01c0,4.56-2.456,10.2-6.413,11.4a16.779,16.779,0,0,1-2.236.51c-10.005,1.55-14.109-17.54-9.489-23.31,2.569-3.21,6.206-4.08,11.525-4.08h17.935A24.22,24.22,0,0,1,237.418,8583.56Zm-12.145-24.45c-8.571.02-12.338,0.98-16.061,4.84-6.267,6.49-6.462,20.69,4.754,27.72a24.092,24.092,0,1,1,27.3-32.57h-16v0.01Z"*/}
                {/*transform="translate(-195 -8544)"></path>*/}
                {/*</svg>*/}
                <p className="menu__logo-title">Матурата</p>
              </Link>
            </div>
            <div className="menu__item d-t-none">
              <nav className="menu__center-nav">
                {navigation}
              </nav>
            </div>
            <div className="menu__item">
              <nav className="menu__right-nav d-l-none">
                <li><Link to={'/about'} className="link link--gray">За
                  сайта</Link></li>
              </nav>
              <div className="d-none d-t-block">
                <button type="button" className="menu__mobile-button">
                  <span><i className="mdi mdi-menu" aria-hidden="true"/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)

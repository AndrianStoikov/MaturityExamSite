import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeTopBar extends Component {
  render () {
    return (
      <div>
        <section className="section">
          <div className="topbar-wrapper">
            <nav className="topbar">
              <div className="container">
                <div className="row">
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link active"
                       href="#далчев">Атанас Далчев</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link active"
                       href="#милев">Гео Милев</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link active"
                       href="#багряна">Елисавета Багряна</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link" href="#йовков">Йордан Йовков</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link" href="#смирненски">Христо Смирненски</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link"
                       href="#вапцаров">Никола Вапцаров</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link" href="#димов">Димитър Димов</a>
                  </div>
                  <div className="col topbar__item">
                    <a className="link link--gray topbar__link" href="#талев">Димитър Талев</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="container jsfeatures">

            <div id="далчев" className="row about-app about-app--reverse">
              <div className="col-6 about-app__description">
                <div className="about-app__description-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>

                  <h4 className="about-app__description-title">Атанас Далчев</h4>
                  <p>Атанас Христов Далчев е сред най-видните български поети и преводачи на XX век. Автор е на поезия с ярко философска проблематика.
                    Превежда стихотворения и белетристика от френски, испански, италиански, немски и руски писатели.
                    Носител е на Хердеровата награда на Виенския университет (1972)</p>
                  <Link to={'/authors/atanas-dalchev'}
                     className="site-btn site-btn--accent about-app__btn">Повече за Атанас Далчев</Link>
                </div>
              </div>
              <div className="col-6 about-app__img about-app__img--left">
                <div className="about-app__img-wrap">
                  <img alt="" src="http://e-vestnik.bg/imgs/art_show/At_Dalchev1.jpg"/>
                </div>
              </div>
            </div>

            <div id="милев" className="row about-app">
              <div className="col-6 about-app__description">
                <div
                  className="about-app__description-content about-app__description-content--left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>

                  <h4 className="about-app__description-title">Гео Милев</h4>
                  <p>От детска възраст проявява интерес към литературата и рисуването.
                    През 1907 г. в детското вестниче "Славейче" (бр.15 от 5.1.1907) е отпечатано първото му стихотворение.</p>
                  <Link to={'/authors/geo-milev'}
                        className="site-btn site-btn--accent about-app__btn">Повече за Гео Милев</Link>
                </div>
              </div>
              <div className="col-6 about-app__img">
                <div className="about-app__img-wrap">
                  {/* TODO: LINK SHOULD BE PROVIDED IN THE SITE SOURCES */}
                  <img alt="" src="https://alchetron.com/cdn/geo-milev-e579da83-007a-4d2b-b3a8-855c97cad7e-resize-750.jpeg"/>
                </div>
              </div>
            </div>

            <div id="багряна" className="row about-app about-app--reverse">
              <div className="col-6 about-app__description">
                <div className="about-app__description-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>

                  <h4 className="about-app__description-title">Елисавета Багряна</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo, sem mauris
                    pharetra arcu, id viverra eros ipsum
                    ac
                    lorem. Suspendisse potenti.</p>
                  <Link to={'/authors/elisaveta-bagrqna'}
                        className="site-btn site-btn--accent about-app__btn">Повече за Елисавета Багряна</Link>
                </div>
              </div>
              <div className="col-6 about-app__img about-app__img--left">
                <div className="about-app__img-wrap">
                  <img alt="" src="https://m4.netinfo.bg/media/images/32581/32581736/960-540-elisaveta-bagriana.jpg"/>
                </div>
              </div>
            </div>

            <div id="йовков" className="row about-app">
              <div className="col-6 about-app__description">
                <div
                  className="about-app__description-content about-app__description-content--left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>
                  <h4 className="about-app__description-title">Йордан Йовков</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo.</p>
                </div>
              </div>
              <div className="col-6 about-app__img">
                <div className="about-app__img-wrap">
                  <img alt="" src="assets/img/img_feature_screen_4.png"/>
                </div>
              </div>
            </div>

            <div id="смирненски" className="row about-app about-app--reverse">
              <div className="col-6 about-app__description">
                <div className="about-app__description-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>
                  <h4 className="about-app__description-title">Христо Смирненски</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo, sem mauris
                    pharetra arcu, id viverra eros ipsum
                    ac
                    lorem. Suspendisse potenti.</p>
                </div>
              </div>
              <div className="col-6 about-app__img about-app__img--left">
                <div className="about-app__img-wrap">
                  <img alt="" src="assets/img/img_feature_screen_5.png"/>
                </div>
              </div>
            </div>

            <div id="вапцаров" className="row about-app">
              <div className="col-6 about-app__description">
                <div
                  className="about-app__description-content about-app__description-content--left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>
                  <h4 className="about-app__description-title">Никола Вапцаров</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo, sem mauris
                    pharetra arcu, id viverra eros ipsum
                    ac
                    lorem. Suspendisse potenti. Vestibulum aliquam blandit
                    scelerisque.</p>
                </div>
              </div>
              <div className="col-6 about-app__img">
                <div className="about-app__img-wrap">
                  <img alt="" src="assets/img/img_feature_screen_6.png"/>
                </div>
              </div>
            </div>

            <div id="димов" className="row about-app about-app--reverse">
              <div className="col-6 about-app__description">
                <div className="about-app__description-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>
                  <h4 className="about-app__description-title">Димитър Димов</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo, sem mauris
                    pharetra arcu, id viverra eros ipsum
                    ac
                    lorem. Suspendisse potenti.</p>
                </div>
              </div>
              <div className="col-6 about-app__img about-app__img--left">
                <div className="about-app__img-wrap">
                  <img alt="" src="assets/img/img_feature_screen_5.png"/>
                </div>
              </div>
            </div>

            <div id="талев" className="row about-app">
              <div className="col-6 about-app__description">
                <div
                  className="about-app__description-content about-app__description-content--left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120"
                       height="120"
                       viewBox="0 0 120 120">
                    <rect className="svg-bg" width="120" height="120"/>
                    <path className="svg-light-gray"
                          d="M112,20a2,2,0,0,1,2,2V34a2,2,0,0,1-4,0V22A2,2,0,0,1,112,20Zm-6,6h12a2,2,0,0,1,0,4H106A2,2,0,0,1,106,26ZM8,16a2,2,0,0,1,2,2V30a2,2,0,0,1-4,0V18A2,2,0,0,1,8,16ZM2,22H14a2,2,0,0,1,0,4H2A2,2,0,0,1,2,22ZM20,92a2,2,0,0,1,2,2v12a2,2,0,0,1-4,0V94A2,2,0,0,1,20,92Zm-6,6H26a2,2,0,0,1,0,4H14A2,2,0,0,1,14,98ZM60,20A40,40,0,1,1,20,60,40,40,0,0,1,60,20Z"/>
                    <g id="login">
                      <rect className="svg-element" x="51" y="84" width="18"
                            height="6" rx="3" ry="3"/>
                      <path id="input" className="svg-gray"
                            d="M41,72H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,72Zm0-10H79a3,3,0,0,1,0,6H41A3,3,0,0,1,41,62Z"/>
                      <path id="user" className="svg-dark-gray"
                            d="M60,32a5,5,0,1,1-5,5A5,5,0,0,1,60,32ZM58,42h4a7,7,0,0,1,7,7v3H51V49A7,7,0,0,1,58,42Z"/>
                    </g>
                  </svg>
                  <h4 className="about-app__description-title">Димитър Талев</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque placerat eros ac finibus
                    congue.
                    Integer consectetur, lorem nec accumsan commodo, sem mauris
                    pharetra arcu, id viverra eros ipsum
                    ac
                    lorem. Suspendisse potenti. Vestibulum aliquam blandit
                    scelerisque.</p>
                </div>
              </div>
              <div className="col-6 about-app__img">
                <div className="about-app__img-wrap">
                  <img alt="" src="assets/img/img_feature_screen_6.png"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Header from '../components/sub-components/Header'
import HomeTopBar from '../components/sub-components/HomeTopBar'
import $ from 'jquery'

export default class Home extends Component {
  componentDidMount () {
    //Fixed topbar
    let mTop = $('.topbar').offset().top
    let eTop = $('#endMenu').offset().top
    $(window).on('scroll', function () {
      let top = $(document).scrollTop()

      if (top >= (mTop - 100) && top <= (eTop - 350)) {
        $('.topbar').addClass('topbar--fixed').removeAttr('style')
        $('.jsfeatures').addClass('jsfeatures--active')
      } else if (top >= (eTop - 350) && top <= (eTop - 150)) {
        $('.topbar').css({'transform': 'translateY(-150px)'})
      } else {
        $('.topbar').removeClass('topbar--fixed').removeAttr('style')
        $('.jsfeatures').removeClass('jsfeatures--active')
      }
    })

    //topbar
    $(window).on('scroll', function () {
      let $sections = $('.about-app')
      $sections.each(function (i, el) {
        let top = $(el).offset().top - 283
        let bottom = top + $(el).height() + 105
        let scroll = $(window).scrollTop()
        let id = $(el).attr('id')
        if (scroll > top && scroll < bottom) {
          $('a.active').removeClass('active')
          $('a[href=\'#' + id + '\']').addClass('active')
        }
      })
    })

    //Anchors
    $(function () {
      $('a[href^=\'#\']').on('click', function () {
        let target = $(this).attr('href')
        $('html, body').animate({scrollTop: $(target).offset().top}, 800)
        return false
      })
    })

    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <Header
          infoText={'Сайтът предоставя достъп до всички 8 автори от 12-ти клас,\n' +
          'които са включени в държавния зрелостен изпит, техните произведения,\n' +
          'анализи към тях и тестове'}
          image={''}
          centerContent={'header-home--center-content'}>
          <div className="row header-home__btns header-home__btns-pricing">
            <div className="col-7">
              <a
                href="#wrapper"
                className="site-btn site-btn--accent site-btn--right header-home__btn"
                style={{
                  background: '#ff5c72',
                  // marginLeft: '125px'
                }}>
                Към авторите <span style={{marginLeft: '10px'}}><i
                className='arrow down'/></span>
              </a>
            </div>
          </div>
        </Header>

        <HomeTopBar/>

        <div id="endMenu"/>
      </div>
    )
  }
}

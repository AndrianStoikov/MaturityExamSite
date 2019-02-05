import $ from 'jquery'

class DesignJavaScript {
  static fixHeader () {
    function fixedHeader () {
      let ww = $(window).scrollTop()
      if (ww > 0) {
        $('.menu').addClass('menu--active')
        $('.mobile-menu').addClass('mobile-menu--scroll')
      } else {
        $('.menu').removeClass('menu--active')
        $('.mobile-menu').removeClass('mobile-menu--scroll')
      }
    }

    fixedHeader()

    $(window).on('scroll', function () {
      fixedHeader()
    })

    // Prevent multiple attaching event listeners
    let mobileMenuButton = $('.menu__mobile-button, .mobile-menu__close')
    let mobileMenuLinks = $('.mobile-menu__wrapper .link--gray')
    let submenu = $('.mobile-menu__li-collapse')
    let nestedSubmenu = $('.nested_mobile-menu__li-collapse')

    mobileMenuButton.off('click')
    mobileMenuLinks.off('click')
    submenu.off('click')
    nestedSubmenu.off('click')

    //Open mobile menu
    mobileMenuButton.on('click', function () {
      $('.mobile-menu').toggleClass('mobile-menu--active')
    })

    //Close mobile menu after click
    mobileMenuLinks.on('click', function () {
      $('.mobile-menu').removeClass('mobile-menu--active')
    })

    $(document).on('ready', function () {
      $(function () {
        $('.mobile-menu__li-collapse').addClass('mobile-menu__li-collapse--close')

        $('.nested_mobile-menu__li-collapse').addClass('nested_mobile-menu__li-collapse--close')
      })
    })

    //Open and close submenu
    submenu.on('click', function () {
      $(this).toggleClass('mobile-menu__li-collapse--active')
      $(this).toggleClass('mobile-menu__li-collapse--close')
    })

    //Open and close submenu
    nestedSubmenu.on('click', function () {
      var nestedMenu = $(this).next('.nested_mobile-menu__ul--collapsed')

      $(this).toggleClass('nested_mobile-menu__li-collapse--active')
      $(this).toggleClass('nested_mobile-menu__li-collapse--close')

      nestedMenu.toggleClass('submenu--active')
      nestedMenu.toggleClass('submenu--close')
    })

  }

  static fixSidebar () {
    this._enableSideBar()
  }

  static _enableChapter () {
    this._Sidebar()

    let $sections = $('.chapter')
    $sections.each(function (i, el) {
      let top = $(el).offset().top - 225
      let bottom = top + $(el).height()
      let scroll = $(window).scrollTop()
      let id = $(el).attr('id')
      if (scroll > top && scroll < bottom) {
        $('li.active').removeClass('active')
        $('a[href=\'#' + id + '\']').parent().addClass('active')
      }
    })
  }

  static _enableSideBar () {

    // Prevents over attaching events
    $('a[href^=\'#\']').off('click')
    $(window).off('scroll')

    $(window).on('scroll', () => this._enableChapter())

    $(window).on('resize', this._Sidebar())

    DesignJavaScript.fixHeader()

    //Anchors
    $(function () {
      $('a[href^=\'#\']').on('click', function () {
        let target = $(this).attr('href')
        $('html, body').animate({scrollTop: $(target).offset().top - 110}, 800)
        return false
      })
    })

  }

  static _Sidebar () {
    let sidebar = $('.sidebar')

    let mTop = $('#top').offset().top
    let top = $(document).scrollTop()
    let eTop = $('#endMenu').offset().top
    let mHeight = sidebar.height()
    let width = $('.col-3').width()

    if (top >= (mTop - 100) && top < (eTop - mHeight - 300)) {
      sidebar.addClass('sidebar--fixed').removeClass('sidebar--bottom')
      sidebar.css('width', width)
    } else if (top >= (eTop - mHeight - 300)) {
      sidebar.addClass('sidebar--bottom').removeClass('sidebar--fixed')
    } else {
      sidebar.removeClass('sidebar--fixed').removeClass('sidebar--bottom')
    }
  }
}

export default DesignJavaScript

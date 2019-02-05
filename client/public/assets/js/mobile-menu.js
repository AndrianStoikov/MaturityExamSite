'use strict';

//Open mobile menu
$('.menu__mobile-button, .mobile-menu__close').on('click', function () {
  $('.mobile-menu').toggleClass('mobile-menu--active');
});

//Close mobile menu after click
$('.mobile-menu__wrapper .link--gray').on('click', function () {
  $('.mobile-menu').removeClass('mobile-menu--active');
});

$(document).on('ready', function () {
  $(function () {
    $('.mobile-menu__li-collapse').addClass('mobile-menu__li-collapse--close');

    $('.nested_mobile-menu__li-collapse').addClass('nested_mobile-menu__li-collapse--close');
  });
});

//Open and close submenu
$('.mobile-menu__li-collapse').on('click', function () {
  $(this).toggleClass('mobile-menu__li-collapse--active');
  $(this).toggleClass('mobile-menu__li-collapse--close');
});

//Open and close submenu
$('.nested_mobile-menu__li-collapse').on('click', function () {
  var nestedMenu = $(this).next('.nested_mobile-menu__ul--collapsed')

  $(this).toggleClass('nested_mobile-menu__li-collapse--active');
  $(this).toggleClass('nested_mobile-menu__li-collapse--close');

  nestedMenu.toggleClass('submenu--active')
  nestedMenu.toggleClass('submenu--close')
});

$(document).ready(function () {

  // Модальное меню, переключение на список
  $('.satsangs__menu-list').click(function (e) { 
    $('.satsangs__menu-mount').toggleClass('satsangs__menu--item-active');
    $('.satsangs__menu-list').toggleClass('satsangs__menu--item-active');
    $('.modal-menu').toggleClass('menu-visible');
    $('.satsangs__button-box-1').toggleClass('menu-visible');
    $('.satsangs__button-box-2').toggleClass('menu-visible');    
  });
  // Модальное меню, переключение на гору
  $('.satsangs__menu-mount').click(function (e) { 
    $('.satsangs__menu-list').toggleClass('satsangs__menu--item-active');
    $('.satsangs__menu-mount').toggleClass('satsangs__menu--item-active');
    $('.modal-menu').toggleClass('menu-visible');
    $('.satsangs__button-box-2').toggleClass('menu-visible');
    $('.satsangs__button-box-1').toggleClass('menu-visible');    
  });
  //////////////////////////////////////////////////////////////////////////////////////






  
});
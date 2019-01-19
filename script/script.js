$(document).ready(function () {

  // Модальное меню, переключение на список
  $('.satsangs__menu-list').click(function (e) {

    // Переключение иконок
    $('.satsangs__menu-mount').removeClass('satsangs__menu--item-active');
    $('.satsangs__menu-list').addClass('satsangs__menu--item-active');

    // Вызов модального меню
    $('.modal-menu').addClass('menu-visible');

    // Переключение кнопок
    $('.satsangs__button-box-1').removeClass('menu-visible');
    $('.satsangs__button-box-2').addClass('menu-visible'); 
  });
  
  // Модальное меню, переключение на гору
  $('.satsangs__menu-mount').click(function (e) {

    // Переключение иконок
    $('.satsangs__menu-list').removeClass('satsangs__menu--item-active');
    $('.satsangs__menu-mount').addClass('satsangs__menu--item-active');
  
    // Скрытие модального меню
    $('.modal-menu').removeClass('menu-visible');
  
    // Переключение кнопок
    $('.satsangs__button-box-2').removeClass('menu-visible');
    $('.satsangs__button-box-1').addClass('menu-visible');
  });
  //////////////////////////////////////////////////////////////////////////////////////






  
});
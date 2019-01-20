$(document).ready(function () {
  $('.books-slider__slider-box').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<div class="arrow arrow-prev"></div>',
    prevArrow: '<div class="arrow arrow-next"></div>',
    dotsClass: 'dots'
  });
});
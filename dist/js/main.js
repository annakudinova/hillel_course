"use strict";

$(document).ready(function () {
  console.log('Слайдер инициализируется');
  var $slider = $('.team__section-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function customPaging(slider, i) {
      return '';
    }
  });
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.team__section-dots-dot').removeClass('active');
    $('.team__section-dots-dot').eq(nextSlide).addClass('active');
  });
  $('.team__section-dots-dot').on('click', function () {
    var slideIndex = $(this).data('slide');
    $slider.slick('slickGoTo', slideIndex);
    $('.team__section-dots-dot').removeClass('active');
    $(this).addClass('active');
  });
  $('.team__section-card').on('click', function () {
    $slider.slick('slickNext');
  });
});
const $header = $('.header');

$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });

  if ($(window).scrollTop() > 0) {
    $header.addClass('fixed');
  }
});

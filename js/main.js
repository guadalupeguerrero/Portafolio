$(function() {

 $('#navigation a').stop().animate({'marginLeft':'-85px'},1000);

 $('#navigation > li').hover(
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
  }
 );
});

$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});
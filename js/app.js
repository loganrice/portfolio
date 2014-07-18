$(document).ready(function() {
  $('.curtains').curtain({
    scrollSpeed: 300,
    controls: '.menu',
    curtainLinks: '.curtain-links',
    nextSlide: function(){
      console.log("ok");
    }
  });
});
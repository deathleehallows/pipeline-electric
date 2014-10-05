//= require_tree .
//= require "jquery/dist/jquery.min.js"
//= require "galleria/src/galleria.js"

$(function(){
  if ($('.galleria').length > 0){
    Galleria.loadTheme('/classic/galleria.classic.js');
    Galleria.configure({
      transition: 'fade',
      imageCrop: true,
      carousel: true,
      lightbox: true,
      _toggleInfo: false,
      autoplay: 3000,
      swipe: 'auto'
    });
    Galleria.run('.galleria', {
      _toggleInfo: false
    });
  }
})

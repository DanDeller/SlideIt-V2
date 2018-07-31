(function($) {

  'use strict';

  /*\
   *       _ _      _      _   _
   *   ___| (_) ___| |____| |_| |_
   *  / __| | |/ __  |  __| |_   _|
   *  \__ \ | | (__| |  __| | | |
   *  |___/_|_|\_____|____|_| |_|
   *                     
   *
   *  MES slider plugin
   *  Quick way to display a slider
   *
   *  Options:
   *    - Set parent container
   *    - Set all slides
   *    - Slide change speed(ms)
   *    - Text fade in speed(ms)
   *
  \*/

  $.fn.slideIt = function(options) {
    var options = $.extend({
      parent: '',
      slides: '',
      speed: 0,
      textDelay: 0
    }, options);

    var textIndex = 0,
        slides    = $(options.parent + ' li');
    
    function slideIt() {
      var headlineText = $('.headline-text'),
          sliderTab    = $('.slider-tab:first-child');

      if ($(options.slides + ':first-child').next('li').length > 0) {
        setTimeout(function() {
          $(options.slides + '.active-slide')
            .addClass('active-slide-right')
            .removeClass('active-slide')
            .next('li')
            .addClass('active-slide')
            .find('a')
            .fadeIn(500);

          setTimeout(function() {
            $(options.slides + '.active-slide')
              .next('li')
              .removeClass('active-slide-right');
            $(options.slides + ':first-child').appendTo($(options.parent));
          }, 2000);

          $('.slider-tab.slider-tab-active')
            .removeClass('slider-tab-active')
            .next('div')
            .addClass('slider-tab-active');
          
          textIndex++;
          slideIt();

          if (textIndex === slides.length) {
            textIndex = 0;
            sliderTab.addClass('slider-tab-active')
          } // end inner if

        }, options.speed); // end setTimeout

        headlineText.fadeOut(500, function() {
          $(this).delay(options.textDelay).fadeIn(500);
        });
      } // end outter if
    }; // end slideIt()

    // init()
    slideIt();

    return this;
  }
}(jQuery));

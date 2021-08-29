( function($) {
    'use strict';
  
  
  
        /*-------------------------------------------------------------------------------
        Detect mobile device 
      -------------------------------------------------------------------------------*/
  
  
      
      var mobileDevice = false; 
  
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('html').addClass('mobile');
            mobileDevice = true;
      }
  
      else{
          $('html').addClass('no-mobile');
          mobileDevice = false;
      }
  
  
  
      /*-------------------------------------------------------------------------------
        Window load
      -------------------------------------------------------------------------------*/
  
  
  
      $(window).load(function(){
  
          $('.loader').fadeOut(300);
  
      });
  
      var wow = new WOW({
          offset: 150,          
          mobile: false
        }
      );
      
      wow.init();
  
      var navbarDesctop=$('.navbar-desctop');
      var navbarMobile=$('.navbar-mobile');
  
  
  
      /*-------------------------------------------------------------------------------
        Affix
      -------------------------------------------------------------------------------*/
  
  
  
      navbarDesctop.affix({
        offset: {
          top: 200
        }
      });
  
  
      navbarDesctop.on('affix.bs.affix', function() {
          if (!navbarDesctop.hasClass('affix')){
              navbarDesctop.addClass('animated slideInDown');
          }
      });
  
      navbarDesctop.on('affix-top.bs.affix', function() {
            navbarDesctop.removeClass('animated slideInDown');
            $('.navbar-collapse').collapse('hide');
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Navbar Mobile
      -------------------------------------------------------------------------------*/
  
  
  
      navbarMobile.affix({
        offset: {
          top: 1
        }
      });
  
      navbarMobile.on('affix.bs.affix', function() {
          if (!navbarMobile.hasClass('affix')){
              navbarMobile.addClass('animated slideInDown');
          }
      });
  
      navbarMobile.on('affixed-top.bs.affix', function() {
            navbarMobile.removeClass('animated slideInDown');
            
      });
  
      $('.navbar-nav-mobile li a[href="#"]').on('click',function(){
          $(this).closest('li').toggleClass('current');
          $(this).closest('li').find('ul').slideToggle(200);
          return false;
      });
  
  
  
      /*-------------------------------------------------------------------------------
       Navbar collapse
      -------------------------------------------------------------------------------*/
  
  
  
      $('.navbar-collapse').on('show.bs.collapse', function () {
          navbarMobile.addClass('affix');
      });
  
      $('.navbar-collapse').on('hidden.bs.collapse', function () {
          if (navbarMobile.hasClass('affix-top')){
              navbarMobile.removeClass('affix');
          }
      });
  
      navbarMobile.on('affixed-top.bs.affix', function() {
          if ($('.navbar-collapse').hasClass('in')){
              navbarMobile.addClass('affix');
          }	
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Smooth scroll to anchor
      -------------------------------------------------------------------------------*/
  
  
  
      $('.js-target-scroll').on('click', function() {
          var target = $(this.hash);
          if (target.length) {
              $('html,body').animate({
                  scrollTop: (target.offset().top -100)
              }, 1000);
              return false;
          }
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Slider 
      -------------------------------------------------------------------------------*/
  
  
      
      if (typeof $.fn.revolution !== 'undefined') {
        
        $("#rev_slider").revolution({
          sliderType:"standard",
          sliderLayout:"fullscreen",
          dottedOverlay:"none",
          delay:7000,
          navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            onHoverStop:"off",
            touch:{
              touchenabled:"on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
            }
          },
          viewPort: {
            enable:true,
            outof:"pause",
            visible_area:"80%"
          },
          responsiveLevels:[2048,1750,1192],
          gridwidth:[1180,1180,980],
          gridheight:[550],
          lazyType:"none",
          shadow:0,
          spinner:"off",
          stopLoop:"on",
          stopAfterLoops:0,
          shuffle:"off",
          autoHeight:"on",
          fullScreenAlignForce:"off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "",
          disableProgressBar:"on",
          hideThumbsOnMobile:"off",
          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          debugMode:false,
          fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
          }
        });
      }
  
        $('.arrow-left').on('click', function(){
             $("#rev_slider").revprev();
        });
    
      $('.arrow-right').on('click', function(){
          $("#rev_slider").revnext();
      });
  
      $('.slide-number .total-count').text($('#rev_slider li').size());
  
      $('#rev_slider').bind("revolution.slide.onchange",function (e,data) {
          $('.slide-number .count').text(data.slideIndex);
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Object Map
      -------------------------------------------------------------------------------*/
  
  
  
      $('.object-label').on('click', function(){
          $('.object-label').not(this).find($('.object-info')).fadeOut(200);
          $(this).find('.object-info').fadeToggle(200);
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Parallax
      -------------------------------------------------------------------------------*/
  
  
  
      $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Project carousel
      -------------------------------------------------------------------------------*/
  
  
  
      $(".js-projects-carousel").owlCarousel({
          itemsMobile:[479,1],
          itemsTablet:[768,2],
          itemsDesktopSmall:[979,2],
          itemsDesktop:[1250,3],
          items:4,
          pagination:false,
          navigation:true,
          slideSpeed:700,
          responsiveRefreshRate:0
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Gallery
      -------------------------------------------------------------------------------*/
  
  
  
      $('.js-projects-gallery').each(function(){
          $(this).magnificPopup({
              delegate: 'a:not(.link)',
              type: 'image',
              removalDelay: 300,
              tLoading: 'Loading image #%curr%...',
              gallery: {
                 enabled: true,
                 navigateByImgClick: true,
                 preload:[0,1]
              },
              image: {
                 tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                 titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                 }
              }
  
          });
      });
  
  
  
      /*-------------------------------------------------------------------------------
        Ajax Form
      -------------------------------------------------------------------------------*/
  
  
  
      if ($('.js-ajax-form').length) {
          $('.js-ajax-form').each(function(){
              $(this).validate({
                  errorClass: 'error wobble-error',
                  submitHandler: function(form){
                      $.ajax({
                          type: "POST",
                          url:"mail.php",
                          data: $(form).serialize(),
                          success: function() {
                              $('.col-message, .success-message').show();
                          },
  
                          error: function(){
                              $('.col-message, .error-message').show();
                          }
                      });
                  }
              });
          });
      }
  })(jQuery);
  
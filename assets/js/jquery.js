$(document).ready(function($) {
  "use strict";
  
  // Animate .navbar-toggler-icon onClick
  $('.navbar-toggler').on('click', function () {
      $('.toggler-icon').toggleClass('open');
  });
  
  // Close navbar on clicking outside
  $(window).on('click', function(event) {
      var clickOver = $(event.target);
      if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
              $('button[aria-expanded="true"]').click();
      }
  });
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
      $('#image1').addClass('nav-scrolled');
      $('#image2').addClass('nav-scrolled');
      $('#image3').addClass('nav-scrolled');
      $('#image4').addClass('nav-scrolled');
      $('#image5').addClass('nav-scrolled');
      } else {
        $('#image1').removeClass('nav-scrolled');
      $('#image2').removeClass('nav-scrolled');
      $('#image3').removeClass('nav-scrolled');
      $('#image4').removeClass('nav-scrolled');
      $('#image5').removeClass('nav-scrolled');
      }
    });
    $('.mob-btn').click(function() {
      $(this).css('display', 'none');
    });
    $('.mob-btnn').click(function() {
      $('.mob-btn').css('display', 'block');
    });
    setTimeout(function() {$('html').addClass("step-one");}, 1000);
    
    AOS.init();
  });

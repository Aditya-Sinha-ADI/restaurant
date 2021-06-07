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
    
    $('.mob-btn').click(function() {
      $(this).css('display', 'none');
    });
    $('.mob-btnn').click(function() {
      $('.mob-btn').css('display', 'block');
    });
  });
    
  new Swiper('.chef-sider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

    AOS.init();
  });

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
  $(function() {
    var scroll1 = $("#nav");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
        scroll1.addClass('scroll');
      } else {
        scroll1.removeClass('scroll');
      }
    });
    
    $('.mob-btn').click(function() {
      $(this).css('display', 'none');
    });
    $('.mob-btnn').click(function() {
      $('.mob-btn').css('display', 'block');
    });
  });
    
  $('.bday').click(function(){
    $('#bd').css('display', 'block');
    $('.bday h4').css('color', 'rgb(228, 170, 99)');
    $('.cparty h4').css('color', 'rgb(213, 220, 226)');
    $('.private h4').css('color', 'rgb(213, 220, 226)');
    $('#p').css('display', 'none');
    $('#c').css('display', 'none')
  });

  $('.cparty').click(function(){
    $('#c').css('display', 'block');
    $('.cparty h4').css('color', 'rgb(228, 170, 99)');
    $('.bday h4').css('color', 'rgb(213, 220, 226)');
    $('.private h4').css('color', 'rgb(213, 220, 226)');
    $('#p').css('display', 'none');
    $('#bd').css('display', 'none');
  });

  $('.private').click(function(){
    $('#p').css('display', 'block');
    $('.private h4').css('color', 'rgb(228, 170, 99)');
    $('.bday h4').css('color', 'rgb(213, 220, 226)');
    $('.cparty h4').css('color', 'rgb(213, 220, 226)');
    $('#c').css('display', 'none');
    $('#bd').css('display', 'none');
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

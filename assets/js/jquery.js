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
    var header1 = $("#image1");
    var header2 = $("#image2");
    var header3 = $("#image3");
    var header4 = $("#image4");
    var header5 = $("#image5");
    var scroll1 = $("#nav");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
      header1.addClass('nav-scrolled');
      header2.addClass('nav-scrolled');
      header3.addClass('nav-scrolled');
      header4.addClass('nav-scrolled');
      header5.addClass('nav-scrolled');
      } else {
        header1.removeClass('nav-scrolled');
        header2.removeClass('nav-scrolled');
        header3.removeClass('nav-scrolled');
        header4.removeClass('nav-scrolled');
        header5.removeClass('nav-scrolled');
      }
      if (scroll >= 20) {
        scroll1.addClass('scroll');
      } else {
        scroll1.removeClass('scroll');
      }
    });

    var leftgear = document.getElementById("leftgear"),
rightgear = document.getElementById("rightgear");
    
window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
    rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});
    
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

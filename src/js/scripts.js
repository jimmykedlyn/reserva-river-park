(function ($, window, document, undefined) {

  'use strict';


  $('#rv__section-two').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsiveClass: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3
      }
    }
  });

  $('#rv__section-three').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsiveClass: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3
      }
    }
  });

  $('#rv__section-four').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsiveClass: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      800: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1
      }
    }
  });

  $('#rv__section-five').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      responsiveClass: true,
      lazyLoad: true,
      navText: ["<img src='assets/img/arrow-left.png' alt='left'>", "<img src='assets/img/arrow-right.png' alt='right'>"],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        800: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          dots: false
        }
      }
    }
  );

  function windowScroll() {
    let st = $(window).scrollTop();
    $("#rv__section-four-duck").css({"top": -120 - ((st - ($('.rv__section-four').offset().top - $(window).height())) * -0.1) + "px"});
    $("#rv__section-two-wave").css({"left": -120 - ((st - ($('.rv__section-two-wave').offset().top - $(window).height())) * -0.1) + "px"});
    $("#rv__section-three-wave").css({"left": -120 - ((st - ($('.rv__section-three').offset().top - $(window).height())) * -0.1) + "px"});

  }

  $(window).scroll(function () {
    let $st = jQuery(window).width();
    if ($st > 767) {
      windowScroll();
    }
  });

  let formN = $('#frm-get-news-inline');
  formN.validate({
    rules: {
      email: {
        required: true,
        email: true
      },
    }
  });
  formN.on('submit', function (e) {
    e.preventDefault();
    $('.news_subscript_feedback').hide();
    let form = $(this);
    if (form.valid()) {
      $.ajax({
        type: "POST",
        url: $(form).attr('action'),
        data: $(form).serialize(),
        dataType: 'json',
        complete: function () {
          form.find('[name=nome]').val('');
          form.find('[name=email]').val('');
          form.find('[name=telefone]').val('');
          form.hide();
          $('.news_subscript_feedback.success').fadeIn(500, function () {
            $(this).delay(5000).fadeOut(500, function () {
              form.show();
            });
          });
        }
      });
    }
  });

  $(document).ready(function () {
    let time;
    if ($('body').hasClass('internal')) {
      time = 150;
    } else {
      time = 1000;
    }
    setTimeout(function () {
      $('body').addClass('loaded');
      $('.preloader .loading-element').addClass('bounceOut');
      setTimeout(function () {
        $('body').removeClass('page-loading');
      }, 400);
    }, time);

  });

  $(document).ready(function () {
    let $sticky = $('.rv__header');
    let stickyOffsetTop = $sticky.offset().top;

    $(window).scroll(function (e) {
      e.preventDefault();

      let scrollTop = $(window).scrollTop();

      if (scrollTop > stickyOffsetTop) {
        $sticky.addClass('sticky-menu-active');

      } else {
        $sticky.removeClass('sticky-menu-active');

      }
    });
  });

  $(document).ready(function () {
    if ($(window).width() <= 1999) {
      $('#rv__header-hamburger').click(function () {
        $('.rv__header-menu').slideToggle(300);
        $('#rv__header-hamburger').toggleClass('active');
      });
    } else {
      $('.rv__header-menu').show();
      $('#rv__header-hamburger').toggleClass('active');
    }
  });

  $(function() {
// Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
  });

  var OnePNav = $('.rv__header-menu');
  var TopOffset = OnePNav.height() -0;
  OnePNav.onePageNav({
    currentClass: 'rv__header-menu-over-active',
    scrollOffset: TopOffset,
  });

})(jQuery, window, document);






// owl carusel
$('.headerCarusel').owlCarousel({
  loop: true,
  responsiveClass: true,
  items: 1,
  dots: true,
  nav: true,
  autoplay: true,
  animateOut: 'fadeOut',
  autoplayTimeout: 2000,

});



$(document).ready(function () {
  $(window).bind('scroll', function () {
    var navHeight = $('header').height() + 50;
    if ($(window).scrollTop() > navHeight) {
      $('.custom-container').addClass('fixed');
    }
    else {
      $('.custom-container').removeClass('fixed');

    }
  });
})


// $('.owl-dot').on('click', function () {
//       owl.trigger('stop.owl.autoplay');
//   });

//   $('.owl-carousel').data('owl.carousel').options.nav = false;
//   $('.owl-carousel').trigger( 'refresh.owl.carousel' );




//   $('.owl-dot').on('click', function () {
//     $('.owl-carousel').trigger('stop.owl.autoplay');

//     var carousel = $('.owl-carousel').data('owl.carousel');
//     carousel.settings.autoplay = false; //don't know if both are necessary
//     carousel.options.autoplay = false;
//     $('.owl-carousel').trigger('refresh.owl.carousel');
// });



// var owl;

// $(document).ready(function(){
//     owl = $(".owl-carousel").owlCarousel({
//         nav: true,
//         autoplay: true,
//     });

//     owl.on('changed.owl.carousel', function(e) {
//         owl.trigger('stop.owl.autoplay');
//         owl.trigger('play.owl.autoplay');
//     });
// });
var owl;

$(document).ready(function () {
  owl = $(".owl-carousel").owlCarousel({
    nav: true,
    autoplay: true,
    // autoplayTimeout: 3000
  });

  owl.on('changed.owl.carousel', function (e) {
    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay');
  });

  $('.hanburger-menu').click(function () {
    $('.collapse').css("display","block");
    $('.hanburger-menu').toggleClass('active-hamb');
    if ($('.hanburger-menu').hasClass('active-hamb')) {
      $('.mobile-ovarley').show();
      $('.collapse').animate({ right: '0px' }, 300, 'linear');
      $('.collapse').css("overflow", "hidden")
    }
    else {
      $('.mobile-ovarley').hide();
      $('.collapse').animate({ right: '-100%' }, 300, 'linear');
      // setTimeout(function() {
      //   $('body').css('overflow', 'visible');
      // }, 200);

    }
  })
   $(".mobile-ovarley").click(function(){
        $('.hanburger-menu').removeClass('active-hamb');
        $('.mobile-ovarley').hide();
        $('.collapse').animate({ right: '-100%' }, 300, 'linear');
      //   setTimeout(function() {
      //     $('body').css('overflow', 'visible');
      // }, 200);

    });

 
});


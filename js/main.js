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

var owl;

$(document).ready(function () {
  owl = $(".owl-carousel").owlCarousel({
    nav: true,
    autoplay: true,
  });

  owl.on('changed.owl.carousel', function (e) {
    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay');
  });
  //  Mobile mENU 
  $('.hanburger-menu').click(function () {
    $('.collapse').css("display", "block");
    $('.hanburger-menu').toggleClass('active-hamb');
    if ($('.hanburger-menu').hasClass('active-hamb')) {
      $('.mobile-ovarley').show();
      $('.collapse').animate({ right: '-39px' }, 300, 'linear');
      $('.navbar').css("overflow", "visible")
      $(".navbar-fixed-top").css("background", "white ");
    }
    else {
      $('.mobile-ovarley').hide();
      $('.collapse').animate({ right: '-100%' }, 300, 'linear');
      $('.navbar').css("overflow", "hidden");
    }
  })
  $(".mobile-ovarley").click(function () {
    $('.hanburger-menu').removeClass('active-hamb');
    $('.mobile-ovarley').hide();
    $('.collapse').animate({ right: '-100%' }, 300, 'linear');
  });
    //Scroll on
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".navbar-fixed-top").css("background", "white");
    }
    else {
      if (!($('.hanburger-menu').hasClass('active-hamb'))) {

        $(".navbar-fixed-top").css("background", "transparent");
      }
    }
  })
}) 
//Languages
$('.az').click(function (e) {
  e.stopPropagation();
  $('.mix-lang').slideToggle();
});

$('.dropdown').click(function () {
  $('.open').toggle(300);
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})
// $('.owl-nav button').click(function(){
//   if($('.owl-item').hasClass('active')){
//     $('.carouselText').addClass('animate__backInDown')
//   }
// })

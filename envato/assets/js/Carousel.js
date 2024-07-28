$('.gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  pauseOnHover: false,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.gallery').on('afterChange', function(event, slick, currentSlide) {
  $('.dot').removeClass('active'); 
  $('.dot').eq(currentSlide).addClass('active'); 
});


$('.dot').click(function() {
  var index = $(this).index(); 
  $('.gallery').slick('slickGoTo', index); 
});


$('.dot:first-child').addClass('active');


$('.slick-carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
});


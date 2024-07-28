$(document).ready(function () {
  var $carousel = $(".carousel2 .container").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });


  $(".dott").first().addClass("active");


  $(".dott").on("click", function () {
    var index = $(this).index();
    $carousel.slick("slickGoTo", index);
  });


  $carousel.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".dott").removeClass("active");
    $(".dott").eq(nextSlide).addClass("active");
  });

  var $picCar = $('.picAbout').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  });
  
  $(".dotAbout").first().addClass("active");
  
  $(".dotAbout").on("click", function() {
    var index = $(this).index();
    $picCar.slick("slickGoTo", index);
  });
  
  $picCar.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(".dotAbout").removeClass("active");
    $(".dotAbout").eq(nextSlide).addClass("active");
  });
  
});

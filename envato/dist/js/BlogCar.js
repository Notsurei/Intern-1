$(document).ready(function () {
  var $carQuote = $(".item-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".dotQuote").first().addClass("active");

  $(".dotQuote").on("click", function () {
    var index = $(this).index();
    $carQuote.slick("slickGoTo", index);
  });

  $carQuote.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(".dotQuote").removeClass("active");
    $(".dotQuote").eq(nextSlide).addClass("active");
});
});

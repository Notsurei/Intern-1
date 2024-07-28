$(document).ready(function () {
  $(".carou3").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3, // Number of items to show at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    arrows: false,
  });

  $(".slick-prev").click(function () {
    $(".carou3").slick("slickPrev");
  });

  $(".slick-next").click(function () {
    $(".carou3").slick("slickNext");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var navbar = $("#navbar");
    var triggerHeight = $(window).height() * 0.9;
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > triggerHeight) {
      navbar.addClass("fixed");
      navbar.css({marginTop: 0});
    } else {
      navbar.removeClass("fixed");
    }
  });
});








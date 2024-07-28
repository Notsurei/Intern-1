$(document).ready(function() {
  $('.accordion-button').click(function() {
    $('.accordion-button').not(this).addClass('collapsed');
    $('.accordion-button').not(this).attr('aria-expanded', 'false');
    $('.accordion-collapse').not($($(this).data('bs-target'))).removeClass('show');

    $(this).toggleClass('collapsed');
    $(this).attr('aria-expanded', !$(this).hasClass('collapsed'));

    var targetId = $(this).data('bs-target');
    $(targetId).toggleClass('show');
  });
});

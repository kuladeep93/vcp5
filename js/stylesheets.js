$(function () {
    $(".sub-section").mouseenter(function () {
        $(this).addClass('is-hovered');
    }).mouseleave(function () {
        $(this).removeClass('is-hovered');
    });
});
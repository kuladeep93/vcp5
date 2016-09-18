$(function () {


    $(".first-sub-section").mouseenter(function () {
        $('.first-sub-section').addClass('.is-hovered');
        console.log("mouse entered");
    }).mouseleave(function () {
        $('.first-sub-section').removeClass('.is-hovered');
        console.log("mouse exited");
    });



});
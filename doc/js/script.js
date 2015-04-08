$(function() {
    $('[data-toggle="tooltip"]').tooltip();


    // popover demo
    $('[data-toggle="popover"]').popover().click(function(e) {
        e.preventDefault();
    });

    $('.carousel').carousel();

});

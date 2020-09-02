$(document).ready(function () {

    $('.navbar-toggler').on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.banner-menu').toggleClass('open-toggle');
    });

    $('.pages-header .navbar-toggler').on('click', function (e) {
        e.stopPropagation();
        $('.main-navbar').toggleClass('open-toggle');
    });

    $('#inquiry-form_anc').on('click', function (e) {
        e.stopPropagation();
        // var cls = $(this).closest(".section").next().offset().top;
        var cls = $('#inquiry-form').offset().top;
        $("html, body").animate({scrollTop: cls}, "slow");
    });

});
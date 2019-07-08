//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 130
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $(document).on('click', 'a.page-scroll2', function(event) {
//         $('#navbarCollapse').collapse('hide');
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top - 150
//         }, 500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
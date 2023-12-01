$(document).ready(function() {
    $(".product__details__pic__slider").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true, // Tự động chuyển slide
        autoplayTimeout: 1000 // Thời gian chờ giữa các slide (đơn vị: milliseconds)
    });
});
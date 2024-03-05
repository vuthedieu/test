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
// $('.latest-product__slider').owlCarousel({
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         600: {
//             items: 3,
//             nav: false
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: false
//         }
//     }
// })
// document.getElementById('humberger__open').addEventListener('click', function() {
//     var menu_header = document.getElementById('menu_header');
//     if (menu_header.style.display === 'block') {
//         menu_header.style.display = 'none';
//     } else {
//         menu_header.style.display = 'block';
//     }
// });

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right = "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png"
    }
}

// All animations will take exactly 1000ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
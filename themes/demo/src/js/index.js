import SimpleParallax from 'simple-parallax-js';
import './lazyload.js';
import simpleParallax from 'simple-parallax-js';

// burger

let burger = document.querySelector('.menu-burger__header');
let menu = document.querySelector('.header-list');
let menuLinks = menu.querySelectorAll('.header-nav__item');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('menu-burger__header--active');

        menu.classList.toggle('header-list--active');

        document.body.classList.toggle('stop-scroll');
    });

// catalog

const listOpen = document.querySelector('.catalog-nav__btn');
const list = document.querySelector('.catalog-nav');
const listClose = document.querySelector('.catalog-nav__close');

listOpen.addEventListener('click', () => {
    list.classList.add('catalog-nav--open');
});

listClose.addEventListener('click', () => {
    list.classList.remove('catalog-nav--open');
});

// contact

var tele = document.querySelector('.contact-nav');
tele.addEventListener('mouseover', function () {
    var telemenu = document.querySelector('.contact-nav__list');
    telemenu.style.display = 'block';
});

tele.addEventListener('mouseout', function () {
    var telemenu = document.querySelector('.contact-nav__list');
    telemenu.style.display = 'none';
});

// menu-threedots

window.onload = function () {
    if (window.innerWidth <= 1380) {

        var moreLink = document.querySelector('.menu-threedots');
        moreLink.addEventListener('mouseover', function () {
            var submenu = document.querySelector('.submenu-threedots');
            submenu.style.display = 'block';
        });

        moreLink.addEventListener('mouseout', function () {
            var submenu = document.querySelector('.submenu-threedots');
            submenu.style.display = 'none';
        });
    }
}

// swiper

const swiperbanner = new Swiper('.swiper-banner', {
    slidesPerView: 1,
    loop: true,
    spaseBetween: 30,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const swipercard = new Swiper('.swiper-card', {
    slidesPerView: 8,
    loop: true,
    spaseBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.slider__next-card',
        prevEl: '.slider__prev-card'
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
            centeredSlides: true,
            spaseBetween: 30,
        },
        480: {
            slidesPerView: 5,
            centeredSlides: true,
            spaseBetween: 30,
        },
        540: {
            slidesPerView: 6,
            centeredSlides: true,
            spaseBetween: 30,
        },
        992: {
            slidesPerView: 7,
            centeredSlides: true,
            spaseBetween: 30,
        },
        1280: {
            slidesPerView: 8,
            spaseBetween: 30,
        }
    }
});
const swiperblog4 = new Swiper('.swiper-blog4-catalog', {
    slidesPerView: 4,
    loop: true,
    spaseBetween: 30,
    navigation: {
        nextEl: '.slider__next-blog4',
        prevEl: '.slider__prev-blog4'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaseBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaseBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaseBetween: 30,
        },
        1090: {
            slidesPerView: 4,
            spaseBetween: 30,
        },
    }
});
const swiperblog7 = new Swiper('.swiper-blog7-video', {
    slidesPerView: 4,
    loop: true,
    spaseBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: '.slider__next-blog7',
        prevEl: '.slider__prev-blog7'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaseBetween: 30,
        },
        482: {
            slidesPerView: 2,
            spaseBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaseBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaseBetween: 30,
        },
        1025: {
            slidesPerView: 4,
            spaseBetween: 30,
        },
    },
});

// parallax

var image = document.getElementsByClassName('imgpar');
new SimpleParallax(image);

// clock

function rotateClockHands() {
    const date = new Date();
    const secondsRatio = date.getSeconds() / 60;
    const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + date.getHours()) / 12;

    rotateHand("#second-hand", secondsRatio);
    rotateHand("#minute-hand", minutesRatio);
    rotateHand("#hour-hand", hoursRatio);
}

function rotateHand(handSelector, rotationRatio) {
    const hand = document.querySelector(handSelector);
    hand.style.transform = `rotate(${rotationRatio * 360}deg)`;
}

setInterval(rotateClockHands, 1000);


// dostavka

let tabsBtn = document.querySelectorAll('.dostavka-btn');
let tabsItem = document.querySelectorAll('.dostavka-item');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('dostavka-btn--active') });
        e.currentTarget.classList.add('dostavka-btn--active');

        tabsItem.forEach(function (element) { element.classList.remove('dostavka-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('dostavka-item--active');
    });
});

// form contact

const btncontact = document.querySelector('.btncontact');
const formcontact = document.querySelector('#formcontact');
const popup = document.querySelector('.popup');
const formclose = document.querySelector('.formclose');


btncontact.addEventListener('click', () => {
    formcontact.classList.add('open');
    popup.classList.add('popup_open');
});
formclose.addEventListener('click', () => {
    formcontact.classList.remove('open');
    popup.classList.remove('popup_open');
});

/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperBig = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: false,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperEntertaiment = new Swiper('.guestSwiper', {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  modules: [Navigation, Pagination],
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperReview = new Swiper('.reviewSwiper', {
  slidesPerView: 1.5,
  loop: true,
  modules: [Navigation, Pagination],
  // centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1350: {
      slidesPerView: 4.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1600: {
      slidesPerView: 4.5,
      spaceBetween: 15,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const saleSwiper = new Swiper('.saleSwiper', {
  slidesPerView: 1.2,
  loop: true,
  modules: [Navigation, Pagination],
  // centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    540: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      spaceBetween: 15,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiperPreview = new Swiper('.swiperPreview', {
  slidesPerView: 1,
  loop: true,
  modules: [Navigation, Pagination],
  centeredSlides: false,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1380: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

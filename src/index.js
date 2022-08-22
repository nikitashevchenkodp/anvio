/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import "./styles/style.scss";
import "./index.html";
import slider from "./modules/mySlider";
import tabs from "./modules/tabs";
import dropdownDesktop from "./modules/dropdown";
import mobSelect from "./modules/mobileSelect";
import accordeon from "./modules/accordeon";
import "./modules/swiperSliders";
import popupPrices from "./modules/popupPrices";

// const burgerBtn = document.querySelector('.burger');
// const mobileNav = document.querySelector('.mobile__nav');
// const pointBtn = document.querySelector('.mobile__nav__point');
const popup = document.querySelector(".mobile-popup");
const popupContent = popup.querySelector(".mobile-popup__content");
const mobileMenu = document.querySelector(".mobile__menu");
const locationMenu = document.querySelector(".location");

function closePopup() {
  popup.classList.remove("mobile-popup__active");
  popupContent.innerHTML = "";
  document
    .querySelectorAll(".mobile__nav__item")
    .forEach((container) =>
      container.classList.remove("mobile__nav__item--active"),
    );
  document
    .querySelectorAll(".mobile__nav__item")
    .forEach((container) => (container.ariaExpanded = "false"));
}

// Close popups when display becomes bigger than 1420px;
const resizeObserver = new ResizeObserver((entries) =>
  entries.forEach((entry) => {
    entry.contentRect.width >= 1420 && closePopup();
  }),
);
resizeObserver.observe(document.body);

// Open and close mobile menu
document.querySelectorAll(".mobile__nav__item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".mobile__nav__item")
      .forEach((navItem) =>
        navItem.classList.remove("mobile__nav__item--active"),
      );
    popupContent.innerHTML = "";
    if (this.classList.contains("burger")) {
      if (this.ariaExpanded === "false") {
        document
          .querySelectorAll(".mobile__nav__item")
          .forEach((item) => (item.ariaExpanded = "false"));
        this.classList.add("mobile__nav__item--active");
        this.ariaExpanded = "true";
        popupContent.innerHTML = "";
        popup.classList.add("mobile-popup__active");
        popupContent.appendChild(mobileMenu);
        mobileMenu.style.display = "flex";
      } else {
        this.classList.remove("mobile__nav__item--active");
        this.ariaExpanded = "false";
        popupContent.innerHTML = "";
        popup.classList.remove("mobile-popup__active");
      }
    }
    if (this.classList.contains("mobile__nav__point")) {
      if (this.ariaExpanded === "false") {
        document
          .querySelectorAll(".mobile__nav__item")
          .forEach((item) => (item.ariaExpanded = "false"));
        this.classList.add("mobile__nav__item--active");
        this.ariaExpanded = "true";
        popupContent.innerHTML = "";
        popup.classList.add("mobile-popup__active");
        popupContent.appendChild(locationMenu);
        locationMenu.style.display = "flex";
      } else {
        this.classList.remove("mobile__nav__container--active");
        this.ariaExpanded = "false";
        popupContent.innerHTML = "";
        popup.classList.remove("mobile-popup__active");
      }
    }
  });
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-popup")) {
    closePopup();
  }
});

// Desktop dropdowns
const dropdownList = document.querySelectorAll(".dropdown-container");
dropdownList.forEach((item) => {
  dropdownDesktop(
    item,
    ".dropdown-trigger",
    ".dropdown-body",
    "dropdown-body--open",
  );
});
// Mobile dropdowns
const mobileDropdownList = document.querySelectorAll(
  ".mobile-dropdown-container",
);
mobileDropdownList.forEach((item) => {
  dropdownDesktop(
    item,
    ".mobile-dropdown-trigger",
    ".mobile-dropdown-body",
    "mobile-dropdown-body--open",
  );
});

// Sliders
document.querySelectorAll(".slider").forEach((sliderItem) => {
  slider(
    sliderItem,
    ".slider__wrapper",
    ".slider__container",
    ".slider__controll--prev",
    ".slider__controll--next",
    ".slider__dot",
    ".slide",
  );
});

// Mobile menu selects
const mobilesSelects = document
  .querySelector(".mobile__selects")
  .querySelectorAll(".select");
mobilesSelects.forEach((selectItem) => {
  mobSelect(
    selectItem,
    ".mobile-select-trigger",
    ".mobile-select-body",
    ".mobile-select-body__item",
    "mobile-select-body--open",
    ".for_dropdown",
  );
});

// Big Popup;

function openBigPopup() {
  document.querySelector(".big-popup").classList.add("big-popup__active");
  document.body.style.overflow = "hidden";
}

function closeBigPopup() {
  document.querySelector(".big-popup").classList.remove("big-popup__active");
  document.querySelector(".big-popup__content").innerHTML = "";
  document.body.style.overflow = "";
}

document.querySelector(".big-popup").addEventListener("click", (e) => {
  if (e.target.classList.contains("big-popup")) {
    closeBigPopup();
  }
});

document.querySelector(".big-popup-close").addEventListener("click", () => {
  document.querySelector(".big-popup").classList.remove("big-popup__active");
  document.body.style.overflow = "";
});

// Open prices popup;
const pricePopupContent = document.querySelector(".popup__prices__container");
const gamePopupContent = document.querySelector(".popup-game__container");
const bigPopupContent = document.querySelector(".big-popup__content");

document.querySelectorAll("[data-modal]").forEach((priceModal) => {
  priceModal.addEventListener("click", (e) => {
    closePopup();
    closeBigPopup();
    openBigPopup();
    if (
      e.target.dataset.modal === "buy" ||
      e.target.dataset.modal === "price"
    ) {
      bigPopupContent.appendChild(pricePopupContent);
      pricePopupContent.style.display = "grid";
    } else if (e.target.dataset.modal === "info") {
      gamePopupContent.style.display = "flex";
      bigPopupContent.appendChild(gamePopupContent);
    }
  });
});

// Swiper

tabs(
  document.querySelector(".big-tabs__container"),
  ".big-tabs__header__control",
  ".big-tabs__item",
  "big-tabs__header__control--active",
);

document.querySelectorAll("[data-scroll]").forEach((item) => {
  item.addEventListener("click", function (e) {
    //  Cancel standart browser behavior
    e.preventDefault();
    //  Close all dropdowns and popups
    document.querySelectorAll(".dropdown-body").forEach((item) => {
      item.classList.remove("dropdown-body--open");
    });
    document.querySelectorAll(".dropdown-trigger").forEach((item) => {
      item.style.color = "black";
    });
    closePopup();
    // Scroll
    document.querySelector(`.${this.dataset.scroll}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

accordeon();
popupPrices();

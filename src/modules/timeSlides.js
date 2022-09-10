/* eslint-disable no-use-before-define */
const slider = document.querySelector(".orderTimeSlider");
const slides = slider.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    closeAll(".orderTimeSlider", ".swiper-slide", "active");
    slide.classList.add("active");
  });
});

function closeAll(parentSelector, itemSelector, activeClass) {
  const parent = document.querySelector(parentSelector);
  const items = parent.querySelectorAll(itemSelector);
  items.forEach((item) => item.classList.remove(activeClass));
}

/* eslint-disable no-use-before-define */
const slider = document.querySelector(".orderGameSlider")!;
const slides = slider.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    closeAll(".orderGameSlider", ".swiper-slide", "active__game");
    slide.classList.add("active__game");
  });
});

function closeAll(
  parentSelector: string,
  itemSelector: string,
  activeClass: string,
) {
  const parent = document.querySelector(parentSelector)!;
  const items = parent.querySelectorAll(itemSelector);
  items.forEach((item) => item.classList.remove(activeClass));
}

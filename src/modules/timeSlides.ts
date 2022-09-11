/* eslint-disable no-use-before-define */
const sliderTime = document.querySelector(".orderTimeSlider")!;
const slidesTime = sliderTime.querySelectorAll(".swiper-slide");
slidesTime.forEach((slide) => {
  slide.addEventListener("click", () => {
    closeAllTime(".orderTimeSlider", ".swiper-slide", "active");
    slide.classList.add("active");
  });
});

function closeAllTime(
  parentSelector: string,
  itemSelector: string,
  activeClass: string,
) {
  const parent = document.querySelector(parentSelector)!;
  const items = parent.querySelectorAll(itemSelector);
  items.forEach((item) => item.classList.remove(activeClass));
}

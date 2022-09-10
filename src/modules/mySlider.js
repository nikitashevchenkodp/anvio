/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// Slider
// eslint-disable-next-line max-len
export default function slider(
  parent,
  sliderSelector,
  tapeSelector,
  prevSelector,
  nextSelector,
  dotsSelector,
  slideSelector,
) {
  const sliderContainer = parent.querySelector(sliderSelector);
  const allSlides = parent.querySelector(tapeSelector);
  const prevControl = parent.querySelector(prevSelector);
  const nextControl = parent.querySelector(nextSelector);
  const slides = parent.querySelectorAll(slideSelector);

  const slidesQuantity = slides.length;
  let slideIndex = 1;
  let offset = 0;
  const step = +window
    .getComputedStyle(parent)
    .width.replace(/[a-zа-яё]/gi, "");
  slides.forEach((slide) => {
    slide.style.width = `${step}px`;
    slide.style.height = window.getComputedStyle(parent).height;
  });
  allSlides.style.width = `${100 * slidesQuantity}%`;
  allSlides.style.gridGap = "20px";
  allSlides.style.transition = "0.7s";

  createDots();
  const dots = parent.querySelectorAll(dotsSelector);
  activeDots(slideIndex);

  prevControl.addEventListener("click", () => {
    if (offset === 0) {
      offset = -step * (slidesQuantity - 1);
      slideIndex = slides.length;
    } else {
      offset += step;
      slideIndex -= 1;
    }
    allSlides.style.transform = `translateX(${offset}px)`;
    activeDots(slideIndex);
  });
  nextControl.addEventListener("click", () => {
    if (offset === -step * (slidesQuantity - 1)) {
      offset = 0;
      slideIndex = 1;
    } else {
      offset -= step;
      slideIndex += 1;
    }
    allSlides.style.transform = `translateX(${offset}px)`;
    activeDots(slideIndex);
  });

  function activeDots(index) {
    dots.forEach((dot) => dot.classList.remove("slider__dot--active"));
    dots.forEach((dot, i) => {
      index === i + 1 && dot.classList.add("slider__dot--active");
    });
  }

  function createDots() {
    const dotsContainer = document.createElement("ul");
    dotsContainer.classList.add("slider__dots");
    for (let i = 0; i < slidesQuantity; i++) {
      const dot = document.createElement("li");
      dot.classList.add("slider__dot");
      dotsContainer.appendChild(dot);
    }
    parent.appendChild(dotsContainer);
  }
}

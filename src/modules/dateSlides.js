import { months, daysOfWeek } from "./consts";
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const res = [];
const d = new Date();
let days = 0;
while (days <= 60) {
  days++;
  // eslint-disable-next-line prettier/prettier
  res.push(d.toDateString());
  d.setDate(d.getDate() + 1);
  // eslint-disable-next-line no-plusplus
}

for (let i = 0; i < res.length; i++) {
  const d = new Date(res[i]);
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.setAttribute("data-order", `${d.toLocaleDateString()}`);
  document
    .querySelector(".orderDateSlider > .swiper-wrapper")
    .appendChild(slide);
  slide.innerText = `${d.getDate()}\n${daysOfWeek[d.getDay()]}`;
  slide.addEventListener("click", () => {
    closeAll(".orderDateSlider", ".swiper-slide", "active");
    slide.classList.add("active");
  });
  if (d.getDate() === 1) {
    slide.style.position = "relative";
    const month = document.createElement("p");
    month.innerText = `${months[d.getMonth()]}`;
    month.style.position = "absolute";
    month.style.top = "-50%";
    month.style.fontSize = "24px";
    month.style.fontWeight = "600";
    month.style.color = "black";
    month.style.left = 0;
    slide.appendChild(month);
  }
}

const dataSlider = document.querySelector(".orderDateSlider");
console.log(dataSlider.getBoundingClientRect());

function closeAll(parentSelector, itemSelector, activeClass) {
  const parent = document.querySelector(parentSelector);
  const items = parent.querySelectorAll(itemSelector);
  items.forEach((item) => item.classList.remove(activeClass));
}

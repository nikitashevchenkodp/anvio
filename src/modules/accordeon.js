/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function accordeon() {
  const accordeons = document.querySelectorAll(".accordeon");
  accordeons.forEach((acord) => {
    const trigger = acord.querySelector(".accordeon__button");
    trigger.addEventListener("click", () => {
      acord.classList.toggle("accordeon__open");
    });
  });
}

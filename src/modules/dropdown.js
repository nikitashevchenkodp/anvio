/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function dropdownDesktop(
  parentNode,
  triggerSelector,
  bodySelector,
  activeClass,
) {
  const trigger = parentNode.querySelector(triggerSelector);
  const body = parentNode.querySelector(bodySelector);
  trigger.addEventListener("click", () => {
    if (body.classList.contains(activeClass)) {
      document.querySelectorAll(bodySelector).forEach((item) => {
        item.classList.remove(activeClass);
      });
      document
        .querySelectorAll(triggerSelector)
        .forEach((item) => (item.style.color = "black"));
    } else {
      document.querySelectorAll(bodySelector).forEach((item) => {
        item.classList.remove(activeClass);
      });
      document
        .querySelectorAll(triggerSelector)
        .forEach((item) => (item.style.color = "black"));
      body.classList.add(activeClass);
      trigger.style.color = "rgb(255, 0, 0)";
    }
  });
}

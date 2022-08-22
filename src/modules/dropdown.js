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

  function closeAll() {
    document.querySelectorAll(bodySelector).forEach((item) => {
      item.classList.remove(activeClass);
    });
    document
      .querySelectorAll(triggerSelector)
      .forEach((item) => (item.style.color = "black"));
  }
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (body.classList.contains(activeClass)) {
      closeAll();
    } else {
      closeAll();
      body.classList.add(activeClass);
      trigger.style.color = "rgb(255, 0, 0)";
    }
  });

  window.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains(triggerSelector.split(1)) ||
      !e.target.classList.contains(bodySelector.split(1))
    ) {
      closeAll();
    }
  });
}

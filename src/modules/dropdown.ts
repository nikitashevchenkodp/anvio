/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

export default function dropdownDesktop(
  parentNode: HTMLElement,
  triggerSelector: string,
  bodySelector: string,
  activeClass: string,
) {
  const trigger: HTMLElement = parentNode.querySelector(triggerSelector)!;
  const body: HTMLElement = parentNode.querySelector(bodySelector)!;

  function closeAll() {
    document.querySelectorAll(bodySelector).forEach((item) => {
      item.classList.remove(activeClass);
    });
    const allTriggers: NodeListOf<HTMLElement> =
      document.querySelectorAll(triggerSelector);
    allTriggers.forEach((item) => (item.style.color = "black"));
  }
  trigger.addEventListener("click", (e: MouseEvent) => {
    e.stopPropagation();
    if (body.classList.contains(activeClass)) {
      closeAll();
    } else {
      closeAll();
      body.classList.add(activeClass);
      trigger.style.color = "rgb(255, 0, 0)";
    }
  });

  window.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (
      (target && !target.classList.contains(triggerSelector.split(".")[1])) ||
      (target && !target.classList.contains(bodySelector.split(".")[1]))
    ) {
      closeAll();
    }
  });
}

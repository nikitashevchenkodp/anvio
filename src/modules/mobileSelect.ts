const mobSelect = (
  parentNode: HTMLElement,
  triggerSelector: string,
  bodySelector: string,
  bodyChildrenSelector: string,
  activeClass: string,
  containerSelector: string,
) => {
  const trigger: HTMLElement | null = parentNode.querySelector(triggerSelector);
  const body: HTMLElement | null = parentNode.querySelector(bodySelector);
  const container: HTMLElement | null =
    document.querySelector(containerSelector);
  const children: NodeListOf<HTMLElement> | null =
    parentNode.querySelectorAll(bodyChildrenSelector);
  trigger!.addEventListener("click", () => {
    if (window.getComputedStyle(trigger!).color === "rgb(255, 0, 0)") {
      body!.classList.remove(activeClass);
      trigger!.style.color = "black";
    } else {
      document.querySelectorAll(bodySelector).forEach((body) => {
        body.classList.remove(activeClass);
      });
      const triggers: NodeListOf<HTMLElement> =
        document.querySelectorAll(triggerSelector);
      triggers.forEach((trig: HTMLElement) => {
        // eslint-disable-next-line no-param-reassign
        trig.style.color = "black";
      });
      if (container && body && trigger) {
        container.innerHTML = "";
        body.classList.toggle(activeClass);
        container.appendChild(body);
        trigger.style.color =
          window.getComputedStyle(trigger).color === "rgb(255, 0, 0)"
            ? "black"
            : "rgb(255, 0, 0)";
      }
    }
  });

  children.forEach((child) => {
    child.addEventListener("click", () => {
      if (container && body && trigger) {
        if (child.dataset.value) trigger!.textContent = child.dataset.value;
        body.classList.remove(activeClass);
        trigger.style.color = "black";
        container.innerHTML = "";
      }
    });
  });
};

export default mobSelect;

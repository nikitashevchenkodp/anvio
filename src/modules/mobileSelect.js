const mobSelect = (
  parentNode,
  triggerSelector,
  bodySelector,
  bodyChildrenSelector,
  activeClass,
  containerSelector,
) => {
  const trigger = parentNode.querySelector(triggerSelector);
  const body = parentNode.querySelector(bodySelector);
  const container = document.querySelector(containerSelector);
  const children = parentNode.querySelectorAll(bodyChildrenSelector);
  trigger.addEventListener('click', () => {
    container.innerHTML = '';
    body.classList.toggle(activeClass);
    container.appendChild(body);
    trigger.style.color = window.getComputedStyle(trigger).color === 'rgb(255, 0, 0)'
      ? 'black'
      : 'rgb(255, 0, 0)';
  });

  children.forEach((child) => {
    child.addEventListener('click', () => {
      trigger.innerText = child.dataset.value;
      body.classList.remove(activeClass);
      trigger.style.color = 'black';
      container.innerHTML = '';
    });
  });
};

export default mobSelect;

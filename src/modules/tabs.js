// Tabs

export default function tabs(
  parentNode,
  tabControlSelector,
  tabContentSelector,
  tabActiveClass,
) {
  const allTabsControll = parentNode.querySelectorAll(tabControlSelector);
  const allTabsContent = parentNode.querySelectorAll(tabContentSelector);

  function showTab(tabIndex = 0) {
    allTabsContent.forEach((tab, i) => {
      if (i === tabIndex) {
        tab.classList.remove("hide");
        tab.classList.add("show");
      } else {
        tab.classList.add("hide");
        tab.classList.remove("show");
      }
    });
  }
  showTab();

  allTabsControll.forEach((tabControll, i) => {
    tabControll.addEventListener("click", () => {
      allTabsControll.forEach((tab) => tab.classList.remove(tabActiveClass));
      tabControll.classList.add(tabActiveClass);
      showTab(i);
    });
  });
}

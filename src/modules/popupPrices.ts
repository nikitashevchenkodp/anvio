export default function popupPrices() {
  const items = document.querySelectorAll(".popup__prices");
  items.forEach((item: Element) => {
    // eslint-disable-next-line no-param-reassign
    item.setAttribute("stile", "overflow:'hidden'");
    item.addEventListener("click", () => {
      items.forEach((priceItem) => {
        priceItem.classList.remove("item3");
      });
      item.classList.remove("item1");
      item.classList.add("item3");
    });
  });
}

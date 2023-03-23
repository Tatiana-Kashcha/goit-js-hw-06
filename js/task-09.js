function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const widgetColorSpan = widgetEl.children[0].firstElementChild;
const widgetBtn = widgetEl.lastElementChild;

const onWidgetBtnClick = () => {
  widgetBtn.onclick = getRandomHexColor();
  widgetColorSpan.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  widgetEl.style.backgroundColor = widgetColorSpan.textContent;
  console.log(widgetColorSpan.textContent);
};
widgetBtn.addEventListener("click", onWidgetBtnClick);

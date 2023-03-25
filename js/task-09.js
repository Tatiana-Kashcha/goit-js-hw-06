function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const widgetSpanText = document.querySelector(".color");
const widgetBtn = document.querySelector(".change-color");

const onWidgetBtnClick = () => {
  const colorBody = getRandomHexColor();
  widgetSpanText.textContent = colorBody;
  bodyEl.style.backgroundColor = colorBody;
  console.log(widgetSpanText.textContent);
};
widgetBtn.addEventListener("click", onWidgetBtnClick);

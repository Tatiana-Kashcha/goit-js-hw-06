function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const quantityInput = controlsEl.firstElementChild;
quantityInput.setAttribute(
  "placeholder",
  `${quantityInput.min} - ${quantityInput.max}`
);
const createBtn = controlsEl.children[1];
const destroyBtn = controlsEl.lastElementChild;
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  if (
    Number(quantityInput.value) >= Number(quantityInput.min) &&
    Number(quantityInput.value) <= Number(quantityInput.max)
  ) {
    amount = Number(quantityInput.value);
  } else {
    return alert(
      `Sorry, please enter the number of items from ${quantityInput.min} to ${quantityInput.max}`
    );
  }
  const boxesItem = document.createElement("div");

  createBtn.onclick = getRandomHexColor();
  boxesItem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  boxesItem.style.width = "30px";
  boxesItem.style.height = "30px";

  boxesEl.append(boxesItem);
  console.log(amount);
}
createBtn.addEventListener("click", createBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);

function resetInputValue() {
  quantityInput.value = null;
}
destroyBtn.addEventListener("click", resetInputValue);
console.dir(boxesEl);

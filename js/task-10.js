function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityInput = document.querySelector("#controls input");
// Додавання плейсхолдера для інпута
quantityInput.setAttribute(
  "placeholder",
  `${quantityInput.min} - ${quantityInput.max}`
);

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  // Перевірка введеного значення інпута на валідність
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

  // Початкові розміри елемента
  let widthEl = 30;
  let heightEl = 30;

  for (let i = 1; i <= amount; i += 1) {
    const boxesItem = document.createElement("div");

    createBtn.onclick = getRandomHexColor();
    boxesItem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;

    boxesItem.style.width = `${widthEl}px`;
    boxesItem.style.height = `${heightEl}px`;

    // Збільшення розмірів наступного елемента
    widthEl += 10;
    heightEl += 10;

    boxesEl.append(boxesItem);
    console.log(amount);
  }
}
createBtn.addEventListener("click", createBoxes);

// Очистка галереї
function destroyBoxes() {
  boxesEl.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);

// Очистка інпута
function resetInputValue() {
  quantityInput.value = null;
}
destroyBtn.addEventListener("click", resetInputValue);

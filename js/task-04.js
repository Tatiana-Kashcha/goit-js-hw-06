let counterValue = 0;
const value = document.querySelector("#value");

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const decrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const incrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);

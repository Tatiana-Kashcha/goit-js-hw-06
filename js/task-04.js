const counterEl = document.querySelector("#counter");

let counterValue = 0;
const value = counterEl.children[1];

const decrementBtn = counterEl.firstElementChild;
const decrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementBtn = counterEl.lastElementChild;
const incrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);

//---------------------------------------------------------------------------
// 4TASK 2варіант

// Проконсультуйте, будьласка, чи допустимо використовувати querySelector декілька разів ?
// І чим це погано ? На лекції я почула, що не треба так робити, але зрозуміла не зовсім.
// Тому цікавить Ваша думка з цього питання. Я спочатку так зробила, потім переробила після лекції.
// Але мене турбує те, що в новому методі я не стукаюся до data-атрибутів, а просто використовую вкладеність.

// let counterValue = 0;
// const value = document.querySelector("#value");

// const decrementBtn = document.querySelector(
//   '#counter button[data-action="decrement"]'
// );
// const decrementClick = () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// };
// decrementBtn.addEventListener("click", decrementClick);

// const incrementBtn = document.querySelector(
//   '#counter button[data-action="increment"]'
// );
// const incrementClick = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// };
// incrementBtn.addEventListener("click", incrementClick);

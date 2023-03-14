const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  ingredientsList.append(ingredientsItem);
}
console.log(ingredientsList);

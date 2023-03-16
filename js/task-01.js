const categoriesList = document.querySelectorAll("#categories li.item");
const categoriesItem = categoriesList.length;
console.log("Number of categories:", categoriesItem);

categoriesList.forEach((element) => {
  const categoriesTitle = element.querySelector("h2").textContent;
  console.log("Category:", categoriesTitle);

  const categoriesTitleElement = element.querySelectorAll("li").length;
  console.log("Elements:", categoriesTitleElement);
});

// script for popup to show all ingredients
// openPopup ()
const foodGroup = document.querySelector("#foodGroup");
const ingredientContainer = document.querySelector("#ingredientContainer");
const recipeResults = document.querySelector("#recipeResults");
const proteinCard = document.querySelector("#protein-card");
const veggiesCard = document.querySelector("#veggies-card");
const fruitCard = document.querySelector("#fruit-card");
const grainsCard = document.querySelector("#grains-card");
const dairyCard = document.querySelector("#dairy-card");
const lgIngredientCard = document.querySelector("#lg-ingredient-card");
const lgCardTitle = document.querySelector("#lg-card-title");
const backBtn = document.querySelector("#back-btn");

// added event listeners for the 5 food groups, and made the correct screen changes

proteinCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "/assets/images/protein.jpg";
  lgCardTitle.textContent = "Protein";
});
veggiesCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "/assets/images/vegetables.jpg";
  lgCardTitle.textContent = "Veggies";
});
fruitCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "/assets/images/fruit.jpg";
  lgCardTitle.textContent = "Fruit";
});
grainsCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "/assets/images/grains.jpg";
  lgCardTitle.textContent = "Grains";
});
dairyCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "/assets/images/dairy.jpg";
  lgCardTitle.textContent = "Dairy";
});

// added back button event listener along with correct screen changes to go back
backBtn.addEventListener("click", function () {
  foodGroup.classList.remove("hide");
  ingredientContainer.classList.add("hide");
});

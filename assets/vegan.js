const randBtn = document.querySelector("#randBtn");
const display = document.querySelector("#display");
const veganImage = document.querySelector(".vegan-image");
const description = document.querySelector("#description");
const veganRecipeList = document.querySelector("#vegan-recipe");
const veganIngredientList = document.querySelector("#vegan-ingredient-list");
const vgIngTitle = document.querySelector("#vg-ing-title");
const vgRecTitle = document.querySelector("#vg-rec-title");
const veganFooter = document.querySelector(".vegan-footer");
var historyRecipe = document.querySelector(".dropdown-menu");
let ing = "";

randBtn.addEventListener("click", function () {
  veganFooter.classList.remove("vegan-footer");
  let randomRecipe = Math.floor(Math.random() * 300) + 1;
  const url = `https://the-vegan-recipes-db.p.rapidapi.com/${randomRecipe}?rapidapi-key=a849f1b857msh721556f52b05562p17c59ajsn2cdc343edbaa&rapidapi-host=the-vegan-recipes-db.p.rapidapi.com`;

  veganIngredientList.innerText = "";
  veganRecipeList.innerText = "";

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      display.textContent = data.title;
      description.textContent = data.description;
      veganImage.src = data.image;
      vgIngTitle.textContent = "Ingredients";
      vgRecTitle.textContent = "Instructions";

      for (let i = 0; i < data.ingredients.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = data.ingredients[i];
        veganIngredientList.appendChild(newLi);
      }
      for (let j = 0; j < data.method.length; j++) {
        let breakLine = document.createElement("br");
        let Li = document.createElement("li");
        step = j + 1;
        ing = data.method[j];
        let recLi = ing[`Step ${step}`];
        Li.innerText = `${recLi}`;
        veganRecipeList.appendChild(Li);
        veganRecipeList.appendChild(breakLine);
      }
    })
    .catch((e) => {
      console.log("error", e);
    });
});

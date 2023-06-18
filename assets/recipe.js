// Js for appeding recipeinfo.html with API data

var bigImg = document.querySelector("#recipe_image img");
var title = document.querySelector(".recpieDesc h2");
var mealType = document.querySelector(".recpieDesc p");
var calNum = document.querySelectorAll(".nut-wrap .nut_card p")[0];
var proNum = document.querySelectorAll(".nut-wrap .nut_card p")[1];
var fatNum = document.querySelectorAll(".nut-wrap .nut_card p")[2];
var urlRecipe = document.querySelector(".Recipe_buttonDesg");
var historyRecipe = document.querySelector(".dropdown-menu");

var ingridCard = document.querySelectorAll(".c-card-body h5");
var imgCard = document.querySelectorAll(".ing_smCard img");
var ing_smCard = document.querySelectorAll(".ing_smCard");

var showAllbtn = document.querySelector(".Showall_button");
var popupContent = document.querySelector(".popup-content");
var closebtn = document.querySelector(".close-btn");
var popupList = document.querySelector(".popupList");


if (bigImg) {
  bigImg.src = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.image;
}

if (title) {
  title.innerText = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.label;
}

if (mealType) {
  mealType.innerText = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.mealType;
}
console.log(mealType);
if (calNum) {
  calNum.innerText = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed();
}

if (proNum) {
  proNum.innerText = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.totalNutrients.PROCNT.quantity.toFixed();
}

if (fatNum) {
  fatNum.innerText = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.totalNutrients.FAT.quantity.toFixed();
}

if (urlRecipe) {
  urlRecipe.href = JSON.parse(localStorage.finalData)[
    Number(localStorage.findex)
  ].recipe.url;
}

const ingList = localStorage.getItem("ingredientSelected").split(",");

ingridCard.forEach((e, i) => {
  if (ingList.length < 2) {
    ing_smCard[1].classList.add("Hide");
    ing_smCard[1].classList.remove("ing_smCard");
    imgCard[1].classList.add("hide");
  }
  e.textContent = ingList[i];
  console.log(e.textContent);
});

for (let i = 0; i < ingList.length; i++) {
  imgCard[i].src = `./assets/icons/${ingList[i].toLowerCase()}.png`;
}

newfunc = () => {};

function RenderHistory() {
  var historyUrl = JSON.parse(localStorage.getItem("finalData"));
  console.log(historyUrl);
  for (i = 0; i < 5; i++) {
    var html = `<li><a class="dropdown-item" href="${historyUrl[i].recipe.url}" target="_blank">${historyUrl[i].recipe.label}</a></li>`;
    historyRecipe.insertAdjacentHTML("beforeend", html);
  }
}
RenderHistory();

showAllbtn.addEventListener("click", function () {
  popupContent.classList.remove("hide");
  showAllbtn.classList.add("hide");
  if (popupList) {
    var ingredientList = JSON.parse(localStorage.finalData)[
      Number(localStorage.findex)
    ].recipe.ingredients;
    popupList.innerText = "";
    for (var i = 0; i < ingredientList.length; i++) {
      // popupList.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.ingredients[i].food
      var li = document.createElement("li");
      li.innerText = JSON.parse(localStorage.finalData)[
        Number(localStorage.findex)
      ].recipe.ingredients[i].food;
      popupList.appendChild(li);
      console.log(li.innerText);
    }
  }
});

closebtn.addEventListener("click", function () {
  popupContent.classList.add("hide");
  showAllbtn.classList.remove("hide");
});

showAllbtn.addEventListener("click", function () {
  popupContent.classList.remove("hide");
});

closebtn.addEventListener("click", function () {
  popupContent.classList.add("hide");
});

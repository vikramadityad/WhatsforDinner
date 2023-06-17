// bring over elements
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
const smIconImg1 = document.querySelector("#sm-icon-img-1");
const smIconImg2 = document.querySelector("#sm-icon-img-2");
const smIconImg3 = document.querySelector("#sm-icon-img-3");
const smIconImg4 = document.querySelector("#sm-icon-img-4");
const smIconTitle1 = document.querySelector("#sm-icon-title-1");
const smIconTitle2 = document.querySelector("#sm-icon-title-2");
const smIconTitle3 = document.querySelector("#sm-icon-title-3");
const smIconTitle4 = document.querySelector("#sm-icon-title-4");
const ingList = document.querySelector("#ing-list");
const ingList2 = document.querySelector("#ing-list-2");
const listIng1 = document.querySelector("#listIng1");
const searchBtn = document.querySelectorAll(".search-btn");
const cardOne = document.querySelector("#card1");
const cardTwo = document.querySelector("#card2");
const cardThree = document.querySelector("#card3");
const cardFour = document.querySelector("#card4");

// variables
let addIngredient = "";
const ingredientSelected = [];
let ingSearchTerm = "";

// search_results_click - transfer to recipeinfo page
cardOne.addEventListener("click", function () {
  window.location.href = "recipeInfo.html";
});

cardTwo.addEventListener("click", function () {
  window.location.href = "recipeInfo.html";
});

cardThree.addEventListener("click", function () {
  window.location.href = "recipeInfo.html";
});

cardFour.addEventListener("click", function () {
  window.location.href = "recipeInfo.html";
});

// added event listeners for the 5 food groups, and made the correct screen changes
// Protein section
proteinCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "./assets/images/protein.jpg";
  lgCardTitle.textContent = "Protein";
  smIconImg1.src = "./assets/icons/chicken.png";
  smIconTitle1.textContent = "Chicken";
  smIconImg2.src = "./assets/icons/eggs.png";
  smIconTitle2.textContent = "Eggs";
  smIconImg3.src = "./assets/icons/tuna.png";
  smIconTitle3.textContent = "Tuna";
  smIconImg4.src = "./assets/icons/pork.png";
  smIconTitle4.textContent = "Pork";
});
//Veggies section
veggiesCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "./assets/images/vegetables.jpg";
  lgCardTitle.textContent = "Veggies";
  smIconImg1.src = "./assets/icons/tomato.png";
  smIconTitle1.textContent = "Tomato";
  smIconImg2.src = "./assets/icons/onion.png";
  smIconTitle2.textContent = "Onion";
  smIconImg3.src = "./assets/icons/potato.png";
  smIconTitle3.textContent = "Potato";
  smIconImg4.src = "./assets/icons/carrot.png";
  smIconTitle4.textContent = "Carrot";
});
// Fruit section
fruitCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "./assets/images/fruit.jpg";
  lgCardTitle.textContent = "Fruit";
  smIconImg1.src = "./assets/icons/apple.png";
  smIconTitle1.textContent = "Apple";
  smIconImg2.src = "./assets/icons/banana.png";
  smIconTitle2.textContent = "Banana";
  smIconImg3.src = "./assets/icons/mango.png";
  smIconTitle3.textContent = "Mango";
  smIconImg4.src = "./assets/icons/pear.png";
  smIconTitle4.textContent = "Pear";
});
// Grains section
grainsCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "./assets/images/grains.jpg";
  lgCardTitle.textContent = "Grains";
  smIconImg1.src = "./assets/icons/bread.png";
  smIconTitle1.textContent = "Bread";
  smIconImg2.src = "./assets/icons/pasta.png";
  smIconTitle2.textContent = "Pasta";
  smIconImg3.src = "./assets/icons/rice.png";
  smIconTitle3.textContent = "Rice";
  smIconImg4.src = "./assets/icons/popcorn.png";
  smIconTitle4.textContent = "Popcorn";
});
// Dairy section
dairyCard.addEventListener("click", function () {
  foodGroup.classList.add("hide");
  ingredientContainer.classList.remove("hide");
  lgIngredientCard.src = "./assets/images/dairy.jpg";
  lgCardTitle.textContent = "Dairy";
  smIconImg1.src = "./assets/icons/milk.png";
  smIconTitle1.textContent = "Milk";
  smIconImg2.src = "./assets/icons/cheese.png";
  smIconTitle2.textContent = "Cheese";
  smIconImg3.src = "./assets/icons/yogurt.png";
  smIconTitle3.textContent = "Yogurt";
  smIconImg4.src = "./assets/icons/butter.png";
  smIconTitle4.textContent = "Butter";
});

// added back button event listener along with correct screen changes to go back
backBtn.addEventListener("click", function () {
  foodGroup.classList.remove("hide");
  ingredientContainer.classList.add("hide");
});

// small icon ingredient cards to add ingredients to the list search recipe card
let pickIngredient = $(".ing_smCard").click(function (e) {
  e.stopPropagation();
  addIngredient = this.innerText;
  for (i = 0; i < ingredientSelected.length; i++) {
    if (
      ingredientSelected.includes(addIngredient) ||
      ingredientSelected.length >= 5
    ) {
      return;
    }
  }
  ingredientSelected.push(addIngredient);
  ingSearchTerm = ingredientSelected.join(",");
  let newList1 = document.createElement("li");
  let newList2 = document.createElement("li");
  newList1.innerText = addIngredient;
  newList2.innerText = addIngredient;
  ingList.append(newList1);
  ingList2.appendChild(newList2);
  console.log(ingSearchTerm);
});

//added API URL and fetching the data from Edamam
const appId = "4e7f7b70"; // Edamam API application key
const appKey = "f85978ceeafec0d3d9960d0e356738d6"; // Edamam API application key
const apiUrl = `https://api.edamam.com/search`; // API endpoint for recipe search

async function searchRecipes(query) {
  var ingridientQuery = encodeURIComponent(query); // Convert query into the URL friendly
  var url = `${apiUrl}?app_id=${appId}&app_key=${appKey}&q=${ingridientQuery}`; //Var URL with the query

  try {
    var response = await fetch(url);
    var data = await response.json();
    console.log(data.hits);
    return data.hits; // Return the recipe results in objects
  } catch (errorType) {
    console.error("Error:", errorType);
    return null;
  }
}

for (i of searchBtn) {
  // added loop so you can search with either button
  i.addEventListener("click", function () {
    if (!ingSearchTerm) {
      return;
    }
    var resultClick = document.querySelectorAll("#recipeResults .card-item");
    var herobanner = document.querySelector("#herobanner");
    var recipeResults = document.querySelector("#recipeResults");

    searchRecipes(ingSearchTerm).then((finalData) => {
      console.log("data", finalData);
      var LocalFinalData = JSON.stringify(finalData);
      localStorage.setItem("finalData", LocalFinalData);

      herobanner.classList.add("hide");

      resultClick[0].querySelector("img").src = finalData[0].recipe.image;
      resultClick[1].querySelector("img").src = finalData[1].recipe.image;
      resultClick[2].querySelector("img").src = finalData[2].recipe.image;
      resultClick[3].querySelector("img").src = finalData[3].recipe.image;

      resultClick[0].querySelector(".card-name").innerText =
        finalData[0].recipe.label;
      resultClick[1].querySelector(".card-name").innerText =
        finalData[1].recipe.label;
      resultClick[2].querySelector(".card-name").innerText =
        finalData[2].recipe.label;
      resultClick[3].querySelector(".card-name").innerText =
        finalData[3].recipe.label;

      recipeResults.classList.remove("hide");

      for (let i = 0; i < resultClick.length; i++) {
        resultClick[i].addEventListener("click", function () {
          localStorage.setItem("findex", this.dataset.index);
        });
      }
    });
  });
}

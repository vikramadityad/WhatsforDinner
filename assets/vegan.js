const randBtn = document.querySelector("#randBtn");
const display = document.querySelector("#display");
const veganImage = document.querySelector(".vegan-image");
const description = document.querySelector("#description");

randBtn.addEventListener("click", function () {
  let randomRecipe = Math.floor(Math.random() * 300) + 1;
  const url = `https://the-vegan-recipes-db.p.rapidapi.com/${randomRecipe}?rapidapi-key=a849f1b857msh721556f52b05562p17c59ajsn2cdc343edbaa&rapidapi-host=the-vegan-recipes-db.p.rapidapi.com`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      display.textContent = data.title;
      description.textContent = data.description;
      veganImage.src = data.image;
    })
    .catch((e) => {
      console.log("error", e);
    });
});

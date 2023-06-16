// Js for appeding recipeinfo.html with API data

var bigImg = document.querySelector('#recipe_image img')
var title = document.querySelector('.recpieDesc h2')
var mealType = document.querySelector('.recpieDesc p')
var calNum = document.querySelectorAll('.nut-wrap .nut_card p')[0]
var proNum = document.querySelectorAll('.nut-wrap .nut_card p')[1]
var fatNum = document.querySelectorAll('.nut-wrap .nut_card p')[2]
var urlRecipe = document.querySelector('.Recipe_buttonDesg')

if(bigImg){
  bigImg.src = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.image
}

if(title){
    title.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.label 
}

if(mealType) {
    mealType.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.mealType
}
console.log(mealType);
if(calNum) {
    calNum.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed()
}

if(proNum) {
    proNum.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.totalNutrients.PROCNT.quantity.toFixed()
}

if(fatNum) {
    fatNum.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.totalNutrients.FAT.quantity.toFixed()
}

if(urlRecipe) {
    urlRecipe.href = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.url
}

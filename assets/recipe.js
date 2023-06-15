var bigImg = document.querySelector('#recipe_image img')
var title = document.querySelector('.recpieDesc h2')

if(bigImg){
  bigImg.src = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.image
}

if(title){
    title.innerText = JSON.parse(localStorage.finalData)[Number(localStorage.findex)].recipe.label 
}
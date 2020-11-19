let title = document.querySelector('#title')
let submitBtn = document.querySelector('#submit')
let ingredient = document.querySelector('#ingredient')
let doIt = document.querySelector('#text-content')
let showTitle = document.querySelector('#show-title')
let showIngredients = document.querySelector('#show-ingredients')
let showHowToDoIt = document.querySelector('#show-how-to-do')
let ShowAllRecipes = document.querySelector('#my-saved-recipe')
let showAllBtn = document.querySelector('#show-list-btn')
// Event
submitBtn.addEventListener('click', checkLocalStorage)
showAllBtn.addEventListener('click', getRecipes)

// Global Variable
let allRecipes = []

function addRecipe() {
  if (!title.value || !ingredient.value || !doIt.value) {
    console.log('ett fält är tomt')
    return
  }
  allRecipes.push({
    recipeTitle: title.value,
    recipeIngredients: ingredient.value,
    recipeDoIt: doIt.value,
  })
  saveToLocalStorage()
}

function saveToLocalStorage() {
  localStorage.setItem('My Recipes', JSON.stringify(allRecipes))
  return
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('My Recipes'))
}

function checkLocalStorage() {
  if (localStorage.getItem('My Recipes')) {
    allRecipes.push(...getFromLocalStorage())
  }
  addRecipe()
  allRecipes = []
}

function getRecipes() {
  getFromLocalStorage().map(function (recipe) {
    let title = document.createElement('h2')
    let ingredients = document.createElement('p')
    let howToDo = document.createElement('p')

    title.innerText = recipe.recipeTitle
    ingredients.innerText = recipe.recipeIngredients
    howToDo.innerText = recipe.recipeDoIt

    ShowAllRecipes.appendChild(title)
    ShowAllRecipes.appendChild(ingredients)
    ShowAllRecipes.appendChild(howToDo)
  })
}

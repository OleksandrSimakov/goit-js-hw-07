const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// const ingredientItemList = [...ingredients].forEach(ingredient => {
//     const ingredientItem = document.createElement('li');
//     ingredientItem.textContent = ingredient;
//     const ingredientsList = document.querySelector('#ingredients')
//     ingredientsList.appendChild(ingredientItem)
// })

const ingredientsItems = [];

ingredients.map((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientsItems.push(ingredientItem);
})

// console.log(ingredientsItems)

const ingredientsList = document.querySelector('#ingredients')
// console.log(ingredientsList)

ingredientsList.append(...ingredientsItems)
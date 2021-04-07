const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientItemList = [...ingredients].forEach(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    const ingredientsList = document.querySelector('#ingredients')
    ingredientsList.appendChild(ingredientItem)
})
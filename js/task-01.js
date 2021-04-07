const itemsEl = document.querySelectorAll('#categories > .item')
console.log(`В списке ${itemsEl.length} категории.`)

const CategoryHeading = document.querySelectorAll('.item > h2')
const CategoryList = document.querySelectorAll('.item ul')

console.log(`Категория: ${CategoryHeading[0].textContent}`)
console.log(`Количество элементов: ${CategoryList[0].children.length}`)

console.log(`Категория: ${CategoryHeading[1].textContent}`)
console.log(`Количество элементов: ${CategoryList[1].children.length}`)

console.log(`Категория: ${CategoryHeading[2].textContent}`)
console.log(`Количество элементов: ${CategoryList[2].children.length}`)


// const headings = [...CategoryHeading]
// const categories = [...CategoryList]

// headings.forEach(heading => {
//     console.log(`Категория: ${heading.textContent}`);
// });

// categories.forEach(category => {
//     console.log(`Количество элементов: ${category.children.length}`);
// });
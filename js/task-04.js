// изначальное неправильное решение
// let counterValue = document.querySelector('#value');
// const incrementBtn = document.querySelector('button[data-action="increment"]')
// const decrementBtn = document.querySelector('button[data-action="decrement"]')

// function decrement() {
//     counterValue.textContent -= 1;
// }
// function increment() {
//     counterValue.textContent ++;
// }

// decrementBtn.addEventListener('click', decrement)
// incrementBtn.addEventListener('click', increment)


// откорректированный вариант решения
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

function decrement() {
    counterValue -= 1;
}
function increment() {
    counterValue += 1;
}

decrementBtn.addEventListener('click', function () {
    // console.log('Клик на декремент');
    decrement();
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    // console.log('Клик на инкремент');
    increment();
    valueEl.textContent = counterValue;
});
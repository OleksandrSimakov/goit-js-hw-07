let counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')

function decrement() {
    counterValue.textContent -= 1;
}
function increment() {
    counterValue.textContent ++;
}

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)



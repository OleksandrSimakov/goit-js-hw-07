const inputEl = document.querySelector('#validation-input')
console.log(inputEl)

const inputElLength = document.querySelector('#validation-input[data-length]')
console.log(Number(inputElLength.dataset.length))

inputEl.addEventListener('change', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length >= Number(inputEl.dataset.length)) {
        inputEl.classList.toggle('valid')
    }
    inputEl.classList.toggle('invalid')
}
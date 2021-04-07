const refs = {
    nameOutputEl: document.querySelector('#name-output'),
    nameInputEl: document.querySelector('#name-input'),
}

refs.nameInputEl.addEventListener('input', onInput)

function onInput(event) {
    if (event.currentTarget.value != '') {
        return refs.nameOutputEl.textContent = event.currentTarget.value
    }
    refs.nameOutputEl.textContent = 'незнакомец';
}
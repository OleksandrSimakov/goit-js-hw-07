const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('span'),
}

refs.inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    // console.log(event.currentTarget.value)
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`
    // console.log(refs.textEl)
}
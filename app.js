
window.onload = () => {
    'use strict';
    registerServiceWorker();

    document.getElementById("kj-input").addEventListener("keydown", inputOnChange);
    document.getElementById("kj-input").addEventListener("change", inputOnChange);
    const buttons = document.getElementsByClassName("quick-add-button");
    for (let index = 0; index < buttons.length; index++){
        const button = buttons.item(index);
        button.addEventListener("click", AutoAdd);
    }
}

function inputOnChange() {
    const inputValue = Number.parseFloat(document.getElementById("kj-input").value);
    let newValue = "0";
    if (inputValue !== 0 && !Number.isNaN(inputValue)) {
        newValue = (inputValue / 4.184).toFixed(2);
    }
    document.getElementById("calories-label").innerText = newValue
}

function AutoAdd(event) {
    let currentValue = Number.parseFloat(document.getElementById("kj-input").value);
    if (Number.isNaN(currentValue) || currentValue == undefined) {
        currentValue = 0
    }
    const valueToAdd = Number.parseFloat(event.target.attributes["quick-add-amount"].value);
    const newValue = currentValue + valueToAdd;
    document.getElementById("calories-label").innerText = newValue.toFixed(2)
    document.getElementById("kj-input").value = newValue.toFixed(2)
}


function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js');
    }
}
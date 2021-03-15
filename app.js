
window.onload = () => {
    'use strict';
    registerServiceWorker();

    document.getElementById("kj-input").addEventListener("keyup", inputOnChange);
    document.getElementById("kj-input").addEventListener("change", inputOnChange);
    const buttons = document.getElementsByClassName("quick-add-button");
    for (let index = 0; index < buttons.length; index++){
        const button = buttons.item(index);
        button.addEventListener("click", quickAdd);
    }
    document.getElementById("clear-btn").addEventListener("click", function () { setValues(0,0)})
}

function inputOnChange() {
    const inputValue = Number.parseFloat(document.getElementById("kj-input").value);
    let newValue = "0";
    if (inputValue !== 0 && !Number.isNaN(inputValue)) {
        newValue = convertKilojoulesToCalories(inputValue);
    }
    document.getElementById("calories-label").innerText = newValue
}

function quickAdd(event) {
    let currentValue = Number.parseFloat(document.getElementById("kj-input").value);
    if (Number.isNaN(currentValue) || currentValue == undefined) {
        currentValue = 0
    }
    const valueToAdd = Number.parseFloat(event.target.attributes["quick-add-amount"].value);
    const newValue = currentValue + valueToAdd;
    setValues(newValue, newValue);
}



function convertKilojoulesToCalories(kj) {
    return (kj / 4.184).toFixed(2);
}

function setValues(kj, kcal) {
    document.getElementById("calories-label").innerText = convertKilojoulesToCalories(kcal);
    document.getElementById("kj-input").value = kj;
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js');
    }
}
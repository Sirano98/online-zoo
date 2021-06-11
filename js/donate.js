"use strict"

const donateRange = document.querySelector(".donate__range");
const donateField = document.querySelector(".donate__another");

donateRange.addEventListener("click", chooseSum);

function chooseSum(event) {
    if (event.target.tagName.toLowerCase() === "input") {
        donateField.value = event.target.id;
    }
}
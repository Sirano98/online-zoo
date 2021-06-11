"use strict"

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    burger.classList.toggle("burger-active");
    menu.classList.toggle("header__nav");
    menu.classList.toggle("header__nav-active");
}
"use strict"

const mainVideo = document.querySelector(".camera__video");
const zoosSlider = document.querySelector(".camera__slider");
const spoilerButton = document.querySelector(".description__btn");
const spoiler = document.querySelector(".description__spoiler");

zoosSlider.addEventListener("click", changeVideo);
spoilerButton.addEventListener("click", toggleSpoiler);

function changeVideo(event) {
    if (event.target.className === "item__block") {
        let videoSrc = mainVideo.src;
        mainVideo.src = event.target.previousElementSibling.src;
        event.target.previousElementSibling.src = videoSrc;
    }
}

function toggleSpoiler() {
    spoiler.classList.toggle("description__spoiler-close");
    spoiler.classList.contains("description__spoiler-close") ? spoilerButton.textContent = "Read More" : spoilerButton.textContent = "Read Less";
}
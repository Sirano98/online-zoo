const map = document.querySelector(".inner__map"),
    btnPlus = document.querySelector(".map__btn-plus"),
    btnMinus = document.querySelector(".map__btn-minus"),
    mapBlock = document.querySelector(".map"),
    tooltips = document.querySelectorAll(".animal__tooltip");

let shiftX,
    shiftY,
    touchPointX,
    touchPointY,
    typeOfEvent,
    headerHeight;

// document.addEventListener("touchstart", toggleTooltips);
btnPlus.addEventListener("click", zoomIn);
btnMinus.addEventListener("click", zoomOut);
btnPlus.addEventListener("touchstart", zoomIn);
btnMinus.addEventListener("touchstart", zoomOut);
mapBlock.addEventListener("mousedown", grabMap);
mapBlock.addEventListener("touchstart", grabMap);
mapBlock.addEventListener("mouseup", putMap);
map.addEventListener("dragstart", function (event) { event.preventDefault() });

function zoomIn() {
    let currentWidth = map.clientWidth;
    if (currentWidth >= 3000) {
        return
    }
    map.style.width = (currentWidth + 300) + "px";
}

function zoomOut() {
    let currentWidth = map.clientWidth;
    if (currentWidth <= 700) {
        return
    }
    map.style.width = (currentWidth - 300) + "px";
}

function grabMap(event) {
    checkTypeOfEvent(event);
    headerHeight = document.querySelector(".header").getBoundingClientRect().height;
    shiftX = (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - map.getBoundingClientRect().left;
    shiftY = (event.changedTouches ? event.changedTouches[0].pageY : event.pageY) - map.getBoundingClientRect().top;
    mapBlock.addEventListener("mousemove", moveMap);
    mapBlock.addEventListener("touchmove", moveMap);
    window.onscroll = event.preventDefault();
}

function moveMap(event) {
    map.style.left = (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - shiftX + "px";
    map.style.top = (event.changedTouches ? event.changedTouches[0].pageY : event.pageY) - shiftY - headerHeight + "px"
}

function putMap() {
    mapBlock.removeEventListener("mousemove", moveMap);
    mapBlock.removeEventListener("touchmove", moveMap);
    window.onscroll = null;
}

function checkTypeOfEvent(event) {
    if (event.touches) {
        if (event.target.className === "animal__img") {
            event.target.nextElementSibling.classList.toggle("animal__tooltip-active");
        } else if (event.target.className === "tooltip__link" && "animal__tooltip") {
            mapBlock.removeEventListener("touchstart", grabMap);
            mapBlock.removeEventListener("mousedown", grabMap);
        } else {
            tooltips.forEach(tooltip => {
                tooltip.classList.remove("animal__tooltip-active");
            });
        }
    }
}
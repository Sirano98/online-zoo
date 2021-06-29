const map = document.querySelector(".inner__map"),
    btnPlus = document.querySelector(".map__btn-plus"),
    btnMinus = document.querySelector(".map__btn-minus"),
    mapBlock = document.querySelector(".map");

let shiftX,
    shiftY,
    touchPointX,
    touchPointY,
    typeOfEvent,
    headerHeight;

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
    headerHeight = document.querySelector(".header").getBoundingClientRect().height;
    checkTypeOfEvent(event);
    shiftX = touchPointX.clientX - map.getBoundingClientRect().left;
    shiftY = touchPointY.clientY - map.getBoundingClientRect().top;
    mapBlock.addEventListener(typeOfEvent, moveMap);
    window.onscroll = event.preventDefault();
}

function moveMap(event) {
    checkTypeOfEvent(event);
    map.style.left = touchPointX.pageX - shiftX + "px";
    map.style.top = touchPointY.pageY - shiftY - headerHeight + "px";
}

function putMap() {
    mapBlock.removeEventListener(typeOfEvent, moveMap);
    window.onscroll = null;
}

function checkTypeOfEvent(event) {
    if (event.touches) {
        touchPointX = event.changedTouches[0];
        touchPointY = event.changedTouches[0];
        typeOfEvent = "touchmove";
    } else {
        touchPointX = event;
        touchPointY = event;
        typeOfEvent = "mousemove"
    }
}
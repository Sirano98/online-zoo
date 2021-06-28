const map = document.querySelector(".inner__map"),
    btnPlus = document.querySelector(".map__btn-plus"),
    btnMinus = document.querySelector(".map__btn-minus"),
    mapBlock = document.querySelector(".map");

let startMovePointHorizontal;
let startMovePointVertical;

btnPlus.addEventListener("click", zoomIn);
btnMinus.addEventListener("click", zoomOut);
mapBlock.addEventListener("mousedown", grabMap);
mapBlock.addEventListener("mouseup", putMap);
map.addEventListener("dragstart", function (event) {
    event.preventDefault();
});

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
    // startMovePointHorizontal = event.clientX;
    // startMovePointVertical = event.clientY;
    startMovePointHorizontal = event.clientX - map.getBoundingClientRect().left;
    startMovePointVertical = event.clientY - map.getBoundingClientRect().top;
    // console.log(map.getBoundingClientRect().left);
    mapBlock.addEventListener("mousemove", moveMap);
}

function putMap() {
    // console.log(map.getBoundingClientRect().left);
    mapBlock.removeEventListener("mousemove", moveMap);
}

function moveMap(event) {
    // map.style.left = -(startMovePointHorizontal - event.clientX) + "px";
    // console.log(map.style.left);
    // map.style.top = -(startMovePointVertical - event.clientY) + "px";
    map.style.left = event.pageX - startMovePointHorizontal + "px";
    map.style.top = event.pageY - startMovePointVertical + "px";
}
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
map.addEventListener("dragstart", function (event) { event.preventDefault() });

/*for optimization */
mapBlock.addEventListener("touchstart", grabMapByTouch);
mapBlock.addEventListener("touchend", putMapByTouch);
// ========

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
    startMovePointHorizontal = event.clientX - map.getBoundingClientRect().left;
    startMovePointVertical = event.clientY - map.getBoundingClientRect().top;
    mapBlock.addEventListener("mousemove", moveMap);
}

function putMap() {
    mapBlock.removeEventListener("mousemove", moveMap);
}

function moveMap(event) {
    map.style.left = event.pageX - startMovePointHorizontal + "px";
    map.style.top = event.pageY - startMovePointVertical + "px";
}

function grabMapByTouch(event) {
    if (event.changedTouches.length > 1) {
        let touchLocation = event.changedTouches[0];
        startMovePointHorizontal = touchLocation.clientX - map.getBoundingClientRect().left;
        startMovePointVertical = touchLocation.clientY - map.getBoundingClientRect().top;
        window.ontouchmove = event.preventDefault();
        mapBlock.addEventListener("touchmove", moveByTouch);
    }
}

function moveByTouch(event) {
    map.style.left = event.changedTouches[0].pageX - startMovePointHorizontal + "px";
    map.style.top = event.changedTouches[0].pageY - startMovePointVertical + "px";
}

function putMapByTouch() {
    window.ontouchmove = null;
    mapBlock.removeEventListener("touchmove", moveByTouch);
}
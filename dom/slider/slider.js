const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);
const item = document.querySelectorAll(".item");

let currentPosition = 0;
const itemWidth = getComputedStyle(item[0]).width;
const step = parseInt(itemWidth);
const preview = 300 / step;
const max = (item.length - preview) * step;
const min = 0;

leftButton.addEventListener("click", function(element) {
  element.preventDefault();

  if (currentPosition > min) {
    currentPosition -= step;
    items.style.right = `${currentPosition}px`;
  }
});

rightButton.addEventListener("click", function(element) {
  element.preventDefault();

  if (currentPosition < max) {
    currentPosition += step;
    items.style.right = `${currentPosition}px`;
  }
});
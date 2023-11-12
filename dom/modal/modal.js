const openButton = document.querySelector("#open");
const body = document.querySelector("body");

openButton.addEventListener("click", function(element) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.addEventListener("click", function(element) {
    if (element.target == overlay) {
      closeButton.click();
    }
  })
  
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlay-container");

  const overlayContent = document.createElement("div");
  overlayContent.classList.add("overlay-content");

  overlayContent.innerHTML = "Hello, <b>world</b>!";

  const closeButton = document.createElement("a");
  closeButton.classList.add("close");
  closeButton.textContent = "x";
  closeButton.href = "#";

  closeButton.addEventListener("click", function(element) {
    element.preventDefault();
    body.removeChild(overlay);
  })

  overlay.appendChild(overlayContainer);
  overlayContainer.appendChild(closeButton);
  overlayContainer.appendChild(overlayContent);
  body.appendChild(overlay);
});
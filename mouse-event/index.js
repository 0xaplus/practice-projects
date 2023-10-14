let mouseEvent = document.querySelectorAll(".mouse-event");
let body = document.querySelector("body");
let pointer = document.querySelector("#pointer");

function showCoords(event) {
  let positionX = event.clientX;
  let positionY = event.clientY;
  mouseEvent[0].firstChild.textContent = positionX;
  mouseEvent[1].firstChild.textContent = positionY;

  pointer.style.transform = `translateX(${positionX - 49}px) translateY(${positionY - 340}px)`;     
}
body.addEventListener("mousemove", showCoords);
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let mouseX = 0;
let mouseY = 0;
let delay = 9;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateCursorPosition() {
  let dx = (mouseX - cursorDot.offsetLeft) / delay;
  let dy = (mouseY - cursorDot.offsetTop) / delay;

  cursorDot.style.left = `${cursorDot.offsetLeft + dx}px`;
  cursorDot.style.top = `${cursorDot.offsetTop + dy}px`;

  cursorOutline.style.left = `${cursorDot.offsetLeft}px`;
  cursorOutline.style.top = `${cursorDot.offsetTop}px`;

  requestAnimationFrame(updateCursorPosition);
}

updateCursorPosition();
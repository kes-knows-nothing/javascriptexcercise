const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;


function onClick(event) {
  let locax = event.offsetX;
  let locay = event.offsetY;
  ctx.arc(locax, locay, 0.5, 0, 2 * Math.PI);
  ctx.stroke();
}

canvas.addEventListener('mousemove', onClick)
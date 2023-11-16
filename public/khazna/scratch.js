const canvas = document.getElementById("scratchCard");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");
const backgroundImage = new Image();
const topImage = new Image();
const brushImage = new Image();

backgroundImage.src = "../assets/images/BGKHAZNA.svg";
topImage.src = "../assets/images/KHAZNA.svg";
brushImage.src = "../assets/brushs/brush1.png";
let isDrawing = false;
let offscreenCanvas, offscreenCtx;

function drawImages() {
  // Draw the background image
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Draw the top image
  ctx.drawImage(topImage, 0, 0, canvas.width, canvas.height);
}

function scratch(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  offscreenCtx.globalCompositeOperation = "destination-out";
  // Draw the brush image at the location of the scratch instead of the rectangle
  offscreenCtx.drawImage(brushImage, x, y, 20, 20);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(offscreenCanvas, 0, 0);
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  scratch(e);
});

canvas.addEventListener("mousemove", (e) => {
  scratch(e);
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

topImage.onload = () => {
  offscreenCanvas = document.createElement("canvas");
  offscreenCanvas.width = canvas.width;
  offscreenCanvas.height = canvas.height;
  offscreenCtx = offscreenCanvas.getContext("2d");
  offscreenCtx.drawImage(topImage, 0, 0, canvas.width, canvas.height);

  drawImages();
};

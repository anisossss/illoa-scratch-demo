const canvas = document.getElementById("scratchCard");
canvas.width = 940;
canvas.height = 646;
const ctx = canvas.getContext("2d");
const backgroundImage = new Image();
const topImage = new Image();
const brushImage = new Image();

backgroundImage.src = "../assets/images/BG7VIVANTE.png";
topImage.src = "../assets/images/7VIVANTE.png";
brushImage.src = "../assets/brushs/brush1.png";
let isDrawing = false;
let offscreenCanvas, offscreenCtx;
const topImageWidth = 470;
const topImageHeight = 338;

const topImageX = 68;
const topImageY = 182;
function drawImages() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(topImage, topImageX, topImageY, topImageWidth, topImageHeight);
}

function scratch(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  offscreenCtx.globalCompositeOperation = "destination-out";
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
  offscreenCtx = offscreenCanvas.getContext("2d");
  offscreenCanvas.width = 600;
  offscreenCanvas.height = 600;
  offscreenCtx.drawImage(
    topImage,
    topImageX,
    topImageY,
    topImageWidth,
    topImageHeight
  );

  drawImages();
};

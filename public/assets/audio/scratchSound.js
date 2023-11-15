var audio = document.getElementById("audio");

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  scratch(e);
  audio.play();
});

canvas.addEventListener("mousemove", scratch);

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
  audio.pause();
  audio.currentTime = 0;
});

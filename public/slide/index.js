const scratchOverlay = document.querySelector(".scratch-overlay");
let isScratching = false;

scratchOverlay.addEventListener("mousedown", () => {
  isScratching = true;
});

scratchOverlay.addEventListener("mouseup", () => {
  isScratching = false;
});

scratchOverlay.addEventListener("mousemove", (e) => {
  if (isScratching) {
    const x = e.clientX - scratchOverlay.getBoundingClientRect().left;
    const y = e.clientY - scratchOverlay.getBoundingClientRect().top;
    const radius = 20;
    const mask = `radial-gradient(circle at ${x}px ${y}px, transparent ${radius}px, black ${
      radius + 10
    }px)`;
    scratchOverlay.style.webkitMaskImage = mask;
    scratchOverlay.style.maskImage = mask;
  }
});

scratchOverlay.addEventListener("mouseout", () => {
  isScratching = false;
});

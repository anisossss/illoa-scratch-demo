function play(event) {
  var audio = document.getElementById("audio");
  audio.play();

  if (event) {
    event.preventDefault();
  }
}

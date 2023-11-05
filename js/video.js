var video = document.getElementById("player1");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
});

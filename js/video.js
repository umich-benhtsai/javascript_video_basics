var video = document.getElementById("player1");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  var newSpeed = video.playbackRate * 0.1;
  console.log(`New Speed: ${newSpeed}`);
  video.playbackRate = newSpeed;
});

document.querySelector("#faster").addEventListener("click", function () {
  var newSpeed = video.playbackRate * 0.1;
  console.log(`New Speed: ${newSpeed}`);
  video.playbackRate = newSpeed;
});

document.querySelector("#skip").addEventListener("click", function () {
  var newTime = video.currentTime + 10;
  console.log(`New Time: ${newTime}`);
  if (newTime <= video.duration) {
    video.currentTime = newTime;
  } else {
    video.currentTime = video.duration;
  }
});

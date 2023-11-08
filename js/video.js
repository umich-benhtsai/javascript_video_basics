var video = document.getElementById("player1");
var mute = document.getElementById("mute");
var slider = document.querySelector("#slider");
var volume = document.getElementById("volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  volume.textContent = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  var currentSpeed = video.playbackRate;
  var newSpeed = currentSpeed - currentSpeed * 0.1;
  console.log(`New Speed: ${newSpeed}`);
  video.playbackRate = newSpeed;
});

document.querySelector("#faster").addEventListener("click", function () {
  var currentSpeed = video.playbackRate;
  var newSpeed = currentSpeed + currentSpeed * 0.1;
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

document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  if (video.muted) {
    mute.textContent = "Unmute";
  } else {
    mute.textContent = "Mute";
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  var newVolume = document.querySelector("#slider").value / 100;
  video.volume = newVolume;
  volume.textContent = newVolume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});

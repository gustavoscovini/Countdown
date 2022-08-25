let timerDays = document.getElementById("timerDays");
let timerHours = document.getElementById("timerHours");
let timerMin = document.getElementById("timerMin");
let timerSec = document.getElementById("timerSec");
let countdownDate = new Date(Date.now() + 3600 * 1000 * 24 * 12);

var interval = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerDays.innerHTML = addZero(days);
  timerHours.innerHTML = addZero(hours);
  timerMin.innerHTML = addZero(minutes);
  timerSec.innerHTML = addZero(seconds);
}, 1000);

function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

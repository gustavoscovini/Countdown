let countdownDate = new Date("September 22, 2023 16:00:00").getTime();

var interval = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (1 <= days && days <= 9) {
    days = "0" + days;
  }
  if (1 <= hours && hours <= 9) {
    hours = "0" + hours;
  }
  if (1 <= minutes && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (1 <= seconds && seconds <= 9) {
    seconds = "0" + seconds;
  }

  document.getElementById("timer").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

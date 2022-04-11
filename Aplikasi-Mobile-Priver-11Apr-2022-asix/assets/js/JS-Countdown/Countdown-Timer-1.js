// Set the date we're counting down to
var countDownDate = new Date("Apr 12, 2022 11:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer-1-day").innerHTML = days;

  document.getElementById("timer-1-hours").innerHTML = hours;
  
  document.getElementById("timer-1-minutes").innerHTML = minutes;
  
  document.getElementById("timer-1-seconds").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-1-button").innerHTML = "EXPIRED";
    document.getElementById("timer-1-button").disabled = true;
  }
}, 1000);
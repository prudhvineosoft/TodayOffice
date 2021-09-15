const timer = document.getElementById('stopwatch');
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let hoursElValue = "00"
let minutesElValue = "00"
let secondsElValue = "00"






var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var audio = new Audio('timer_3_beeps.mp3');



function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);

      sec = sec + 1;

      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }

      if (sec < 10 || sec == 0) {
        sec = '0' + sec;
      }
      if (min < 10 || min == 0) {
        min = '0' + min;
      }
      if (hr < 10 || hr == 0) {
        hr = '0' + hr;
      }

      timer.textContent = hr + ':' + min + ':' + sec;

      

      if (hoursEl.value.length < 2) {
        hoursElValue = '0' + hoursEl.value;
        }else {
          hoursElValue = hoursEl.value
        }
      if (minutesEl.value.length < 2) {
        minutesElValue = '0' + minutesEl.value;
        }else {
          minutesElValue = minutesEl.value
        }
      if (secondsEl.value.length < 2) {
        secondsElValue = '0' + secondsEl.value;
      }else {
        secondsElValue = secondsEl.value
      }

      let res = hoursElValue + ":" + minutesElValue + ":" + secondsElValue
            
      
      if (timer.textContent == res) {
        stopTimer()
        audio.play();
      }

      setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}
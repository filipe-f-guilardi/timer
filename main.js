// label //
const minutesLabel = document.querySelector(".minutes-label");
const secondsLabel = document.querySelector(".seconds-label");
// buttons //
const resetBtn = document.querySelector("#reset");
const pauseBtn = document.querySelector("#pause");
const playBtn = document.querySelector("#play");

let seconds = 0;
let minutes = 0;

let interval;

playBtn.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;

      if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
      }

      secondsLabel.innerText = seconds < 10 ? "0" + seconds : seconds;
      minutesLabel.innerText = minutes < 10 ? "0" + minutes : minutes;
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  seconds = 0;
  minutes = 0;

  secondsLabel.innerText = "00";
  minutesLabel.innerText = "00";
});

let stopHours = "00";
let stopMinutes = "00";
let stopSeconds = "00";
let timePassed = 0;
let timePassedNew = 0;
let clearIntervalId = 1;
const start = () => {
  let startTime = new Date();
  let stopTime = 0;
  setInterval(() => {
    stopTime = new Date();
    timePassed =
      stopTime.getHours() * 3600 +
      stopTime.getMinutes() * 60 +
      stopTime.getSeconds() -
      (startTime.getHours() * 3600 +
        startTime.getMinutes() * 60 +
        startTime.getSeconds());
    stopHours = (timePassed - (timePassed % 3600)) / 3600;
    stopMinutes =
      (timePassed - stopHours * 3600 - ((timePassed - stopHours * 3600) % 60)) /
      60;
    stopSeconds = timePassed - stopHours * 3600 - stopMinutes * 60;
    time.innerText = stopHours + ":" + stopMinutes + ":" + stopSeconds;
  }, 1000);
  document.getElementById("start").style.display = "none";
  document.getElementById("pause").style.display = "inline";
};

const pause = () => {
  clearInterval(clearIntervalId);
  document.getElementById("continue").style.display = "inline";
  document.getElementById("reset").style.display = "inline";
  document.getElementById("pause").style.display = "none";
  timePassed += timePassedNew;
};

const reset = () => {
  timePassed = 0;
  time.innerText = 0 + ":" + 0 + ":" + 0;
  document.getElementById("start").style.display = "inline";
  document.getElementById("reset").style.display = "none";
  document.getElementById("continue").style.display = "none";
  clearIntervalId += 1;
};

const Continue = () => {
  let startTime = new Date();
  let stopTime = 0;
  setInterval(() => {
    stopTime = new Date();
    timePassedNew =
      stopTime.getHours() * 3600 +
      stopTime.getMinutes() * 60 +
      stopTime.getSeconds() -
      (startTime.getHours() * 3600 +
        startTime.getMinutes() * 60 +
        startTime.getSeconds());
    stopHours = ((timePassedNew+timePassed) - ((timePassedNew + timePassed)% 3600)) / 3600;
    stopMinutes =
      ((timePassed+timePassedNew) - stopHours * 3600 - ((timePassed + timePassedNew - stopHours * 3600) % 60)) /
      60;
    stopSeconds = timePassed + timePassedNew - stopHours * 3600 - stopMinutes * 60;
    time.innerText = stopHours + ":" + stopMinutes + ":" + stopSeconds;
  }, 1000);
  document.getElementById("pause").style.display = "inline";
  document.getElementById("reset").style.display = "none";
  document.getElementById("continue").style.display = "none";
  clearIntervalId += 1;
};

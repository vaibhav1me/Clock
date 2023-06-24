// ---------------Javascript for clock------------------//
setInterval(() => {
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  hrotation = 30 * hours + minutes / 2 + seconds / 120;
  mrotation = 6 * minutes + seconds / 10;
  srotation = 6 * seconds;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



// setInterval(() => {
//     const now = new Date();
//     const hours = now.getHours() % 12;
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
  
   
//     document.getElementById('hours').textContent = String(hours).padStart(2, '0');
//     document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//     document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  
//     const hourDeg = ((hours + minutes / 60) / 12) * 360;
//     const minuteDeg = (minutes / 60) * 360;
//     const secondDeg = (seconds / 60) * 360;
  
//     document.querySelector('.hour-rotator').style.transform = `rotate(${hourDeg}deg)`;
//     document.querySelector('.minute-rotator').style.transform = `rotate(${minuteDeg}deg)`;
//     document.querySelector('.second-rotator').style.transform = `rotate(${secondDeg}deg)`;
//   }, 1000);


// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// setInterval(() => {
//   seconds++;

//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//   }

//   if (minutes === 60) {
//     minutes = 0;
//     hours++;
//   }

//   if (hours === 12) {
//     hours = 0;
//   }

//   // Update label text
//   document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
//   document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//   document.getElementById('hours').textContent = String(hours).padStart(2, '0');

//   // Rotate each unit proportionally
//   const secondDeg = (seconds / 60) * 360;
//   const minuteDeg = (minutes / 60) * 360;
//   const hourDeg = (hours / 12) * 360;

//   document.getElementById('second-rotator').style.transform = `rotate(${secondDeg}deg)`;
//   document.getElementById('minute-rotator').style.transform = `rotate(${minuteDeg}deg)`;
//   document.getElementById('hour-rotator').style.transform = `rotate(${hourDeg}deg)`;
// }, 1000);

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(() => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 12) {
    hours = 0;
  }

  // Update time text
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');

  // Calculate degrees (progress)
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = (hours / 12) * 360;

  // Update conic gradient
  document.getElementById('second-progress').style.background = `conic-gradient(#00f2ff ${secondDeg}deg, #222 ${secondDeg}deg)`;
  document.getElementById('minute-progress').style.background = `conic-gradient(#00ff88 ${minuteDeg}deg, #222 ${minuteDeg}deg)`;
  document.getElementById('hour-progress').style.background = `conic-gradient(#ff9500 ${hourDeg}deg, #222 ${hourDeg}deg)`;
}, 1000);


  
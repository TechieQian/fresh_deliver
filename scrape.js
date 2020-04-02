/*
    Author: Qian Wan
    ISC License
*/

// Init found node to null.
let domEle = document.getElementById("orderSlotExists");

// Adjustable Settings.
const TIMEOUT = 3000; // milliseconds
const AUDIO_FILE = "https://freesound.org/data/previews/61/61691_384275-lq.mp3";

// Plays audio sound. Choose whatever sound you want
let audio = new Audio(AUDIO_FILE);

// See if slot exists.
if (domEle) {
  if (domEle.innerText === "false") {
    setTimeout(() => {
      location.reload();
    }, TIMEOUT);
  } else {
    audio.play();
  }
} else {
  alert("Qians script broke? Let him know");
}

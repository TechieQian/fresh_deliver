/*
    Author: Qian Wan
    ISC License
*/

// Init found node to null.
let radios = document.querySelectorAll("[name=slotsRadioGroup]");
let found = false;

// Adjustable Settings.
const TIMEOUT = 3000; // milliseconds
const AUDIO_FILE = "https://freesound.org/data/previews/61/61691_384275-lq.mp3";

// Plays audio sound. Choose whatever sound you want
let audio = new Audio(AUDIO_FILE);

// play sound if found.
radios.forEach(input => {
  console.log("has attribute", input.hasAttribute("disabled"));
  if (!input.hasAttribute("disabled")) {
    found = true;
    audio.play();
  }
});

// if not found set a timeout for refresh.
if (!found) {
  setTimeout(() => {
    location.reload();
  }, TIMEOUT);
}

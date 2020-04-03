/*
    Author: Qian Wan

    Description: 
      Chrome plugin. Luckily, Amazon server-renders their HTML so we can access the DOM without DOMContentLoaded event listener.
      It looks for the radio input controls and alert's you when there's one that's not disabled (meaning clickable!).
      It works with all dates on the UI, thanks to everything being rendered on the DOM. 
    
    Enhancement: 
      You can try to extend this script to log time of success. But it'll require a backend :| 

    Notes :
      This plugin doesn't work when the computer is in sleep mode.
*/

// Init found node to null.
let radios = document.querySelectorAll("[name=slotsRadioGroup]");
let found = false;

// Adjustable Settings.
const TIMEOUT = 3000; // milliseconds
const AUDIO_FILE = "https://freesound.org/data/previews/61/61691_384275-lq.mp3";

// Creates the audio tag.
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

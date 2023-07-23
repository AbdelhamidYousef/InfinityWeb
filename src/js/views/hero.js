/* Particles */
// Importing particles
import "./particles/particles.js";
import options from "./particles/options.js";

// Calling Particles
particlesJS("particles-js", options);

/* Loading text */
// Elements
const textEl = document.getElementById("loading-text"),
  cursorEl = document.getElementById("type-cursor");

// Function
const loadingText = function () {
  const textArr = textEl.dataset.text.split("");
  textEl.innerText = "";
  let i = 0;

  const interval = setInterval(() => {
    textEl.innerText += textArr[i];
    i++;

    if (i === textArr.length) resetLoading();
  }, 1500 / textArr.length);

  function resetLoading() {
    clearInterval(interval);

    cursorEl.classList.add("animate-ping-sm");

    setTimeout(() => {
      loadingText(textEl);
      cursorEl.classList.remove("animate-ping-sm");
    }, 2100);
  }
};

loadingText();

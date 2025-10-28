"use strict";

let secretNumber = (document.querySelector(".number").textContent =
  Math.trunc(Math.random() * 20) + 1);
document.querySelector(".number").textContent = "?";
let score = Number(document.querySelector(".score").textContent);
let highScoreOld = document.querySelector(".highscore").textContent;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = document.querySelector(".number").textContent =
    Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "score";
  document.querySelector(".guess").textContent = " ";
});

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ no selected number";
  } else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "🎉 you are correct";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    let newScore = score;
    if (newScore >= highScoreOld) {
      highScoreOld = newScore;
      document.querySelector(".highscore").textContent = newScore;
    }
  } else if (secretNumber > guess) {
    if (score === 0) {
      document.querySelector(".message").textContent = "😭you lost";
    } else {
      document.querySelector(".message").textContent = "you guessed lower";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (secretNumber < guess) {
    if (score === 0) {
      document.querySelector(".message").textContent = "😭you lost";
    } else {
      document.querySelector(".message").textContent = "you guessed higher";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

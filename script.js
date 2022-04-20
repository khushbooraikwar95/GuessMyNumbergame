"use strict";

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No Number! 🙄");

    //When player wins
  } else if (guess === secreteNumber) {
    displayMessage("Correct Number! 😁");
    document.querySelector(".number").textContent = secreteNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayMessage(guess > secreteNumber ? "Too High! 📈" : "Too Low! 📉");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the Game 👎");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secreteNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

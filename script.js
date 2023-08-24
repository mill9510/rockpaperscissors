"use strict";

window.addEventListener("DOMContentLoaded", begin);

let comChoice;
let userChoice;
const comPlayer = document.querySelector("#player1");
const userPlayer = document.querySelector("#player2");

console.log("test");

comChose();

function begin() {
  eventBtns();
}

// denne funktion fortæller, hvilket nummer refererer til hvilken animation
function comChose() {
  const comGuess = Math.floor(Math.random() * 3);
  if (comGuess === 0) {
    comChoice = "rock";
  } else if (comGuess === 1) {
    comChoice = "paper";
  } else {
    comChoice = "scissor";
  }

  console.log(comChoice);
}

function eventBtns() {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorBtn = document.querySelector(".scissors");

  rockBtn.addEventListener("mousedown", playGame);
  paperBtn.addEventListener("mousedown", playGame);
  scissorBtn.addEventListener("mousedown", playGame);
}

function playGame() {
  if (this.classList.contains("rock")) {
    userChoice = "rock";
  } else if (this.classList.contains("paper")) {
    userChoice = "paper";
  } else {
    userChoice = "scissor";
  }

  console.log(userChoice);
  handsShake();
}

function handsShake() {
  comPlayer.classList.remove("rock");
  comPlayer.classList.remove("paper");
  comPlayer.classList.remove("scissors");

  userPlayer.classList.remove("rock");
  userPlayer.classList.remove("paper");
  userPlayer.classList.remove("scissors");

  comPlayer.classList.add("shake");
  userPlayer.classList.add("shake");

  userPlayer.addEventListener("animationend", handsStill);
}

function handsStill() {
  comPlayer.classList.remove("shake");
  userPlayer.classList.remove("shake");

  if (userChoice === "rock") {
    userPlayer.classList.add("rock");
  } else if (userChoice === "paper") {
    userPlayer.classList.add("paper");
  } else userPlayer.classList.add("scissors");

  if (comChoice === "rock") {
    comPlayer.classList.add("rock");
  } else if (comChoice === "paper") {
    comPlayer.classList.add("paper");
  } else comPlayer.classList.add("scissors");

  endGame();
}

function endGame() {
  let winner;

  if (userChoice === "rock" && comChoice === "paper") {
    winner = "com";
  } else if (userChoice === "rock" && comChoice === "scissors") {
    winner = "user";
  } else if (userChoice === "paper" && comChoice === "rock") {
    winner = "user";
  } else if (userChoice === "paper" && comChoice === "scissors") {
    winner = "com";
  } else if (userChoice === "scissors" && comChoice === "rock") {
    winner = "com";
  } else if (userChoice === "scissors" && comChoice === "paper") {
    winner = "user";
  } else {
    winner = "draw";
  }
  winnerIs(winner);
}

function winnerIs(winner) {
  console.log(winner);
  if (winner === "user") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (winner === "com") {
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

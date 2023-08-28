"use strict";

//når siden loades sættes funktionen begin i gang
window.addEventListener("DOMContentLoaded", begin);

let comChoice;
let userChoice;
const comPlayer = document.querySelector("#player1");
const userPlayer = document.querySelector("#player2");

console.log("test");

// sætter funktionen comChose, som bestemmer computerens valg, i gang
comChose();

function begin() {
  eventBtns();
}

// denne funktion fortæller, hvilket nummer refererer til hvilken animation og hvilket valg computeren træffer
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

// definerer knapperne og lytter efter, hvilken der klikkes på
function eventBtns() {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorBtn = document.querySelector(".scissors");

  rockBtn.addEventListener("click", playGame);
  paperBtn.addEventListener("click", playGame);
  scissorBtn.addEventListener("click", playGame);
}

// denne funktion sættes i gang når der klikkes på en knap via playGame i funktionen ovenfor
function playGame() {
  if (this.classList.contains("rock")) {
    userChoice = "rock";
  } else if (this.classList.contains("paper")) {
    userChoice = "paper";
  } else {
    userChoice = "scissor";
  }

  console.log(userChoice);
  // sætter handsShake funktionen i gang
  handsShake();
}

// fjerner først classlist for så at sætte shake animationen på
function handsShake() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  comPlayer.classList.remove("rock");
  comPlayer.classList.remove("paper");
  comPlayer.classList.remove("scissors");

  userPlayer.classList.remove("rock");
  userPlayer.classList.remove("paper");
  userPlayer.classList.remove("scissors");

  comPlayer.classList.add("shake");
  userPlayer.classList.add("shake");

  // når animationen er slut sættes handsStill funktionen i gang
  userPlayer.addEventListener("animationend", handsStill);
}

function handsStill() {
  //fjerner animationen
  comPlayer.classList.remove("shake");
  userPlayer.classList.remove("shake");

  // if sætning som fortæller hvad userChoice repræsenterer og putter rette valg på
  if (userChoice === "rock") {
    userPlayer.classList.add("rock");
  } else if (userChoice === "paper") {
    userPlayer.classList.add("paper");
  } else userPlayer.classList.add("scissors");

  // if sætning som fortæller hvad comChoice repræsenterer og putter rette valg på
  if (comChoice === "rock") {
    comPlayer.classList.add("rock");
  } else if (comChoice === "paper") {
    comPlayer.classList.add("paper");
  } else comPlayer.classList.add("scissors");

  //sætter endGame funktionen i gang
  endGame();
}

function endGame() {
  let winner;

  // opstilling af mulige scenarier og udfald
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

// tildeler rette tekst, når resultatet vises
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

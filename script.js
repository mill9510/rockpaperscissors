"use strict";

const comPlayer = Math.floor(Math.random() * 3) + 1;
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const lose = document.querySelector("#lose");

console.log(rock);
console.log(comPlayer);

// sørger for at der lyttes til om variablerne klikkes på og trigger herefter den tilknyttede funktion
rock.addEventListener("mousedown", clickRock);
scissor.addEventListener("mousedown", clickScissor);
paper.addEventListener("mousedown", clickPaper);

function clickRock() {
  console.log("clickRock");

  rock.removeEventListener("mousedown", clickRock);

  // sætter de rystende hænder i gang når rock klikkes på
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function clickScissor() {
  console.log("clickScissor");

  scissor.removeEventListener("mousedown", clickScissor);

  // sætter de rystende hænder i gang når scissor klikkes på
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function clickPaper() {
  console.log("clickPaper");

  paper.removeEventListener("mousedown", clickPaper);

  // sætter de rystende hænder i gang når paper klikkes på
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", giveResult);
  player2.addEventListener("animationend", giveResult);
}

function giveResult() {
  console.log("giveResult");

  if (comPlayer === rock) {
    comPlayer.classList.add(".player.rock");
  }

  // if (clickRock === comPlayer) {

  // }
}

//   //fjerner alt på players
//   player1.classList = "";
//   player2.classList = "";

//   if (liv <= 0) {
//     lose();
//   } else if (score >= 10) {
//     win();
//   } else {
//     draw();
//   }

// function win() {
//   console.log("newScreen");

//   win.classList.remove("hidden");
// }

// function draw() {
//   console.log("newScreen");

//   draw.classList.remove("hidden");
// }

// function lose() {
//   console.log("newScreen");

//   lose.classList.remove("hidden");
// }

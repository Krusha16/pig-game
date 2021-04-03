// random integer

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// delcarations

const rollButton = document.querySelector(".btn-roll");
const holdButton = document.querySelector(".btn-hold");
let currScore = 0; 
let playerTotal;
const player1 = document.querySelector(".player-0-panel");
const player2 = document.querySelector(".player-1-panel");


// hold button clicked

holdButton.addEventListener("click", e => {
  if (player1.classList.contains("active")) {
    playerTotal = document.querySelector("#score-0");
    playerTotal.innerHTML = parseInt(currScore.innerHTML) + parseInt(playerTotal.innerHTML);
  } else {
    playerTotal = document.querySelector("#score-1");
    playerTotal.innerHTML = parseInt(currScore.innerHTML) + parseInt(playerTotal.innerHTML);
  }
  currScore.innerHTML = 0;
  evaluateWin();
  player1.classList.toggle("active");
  player2.classList.toggle("active");
});

// rolled a one

function oneRolled() {
  alert("You rolled a one! Your turn is over.");
  currScore.innerHTML = 0;
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

// evaluate winner

function evaluateWin() {
  if (playerTotal.innerHTML >= 100) {
    if (player1.classList.contains("active")) {
      alert("Player 1 has won!")
    } else {
      alert("Player 2 has won!")
    }
    location.reload();
  }
}

// roll button clicked

rollButton.addEventListener("click", e => {
  let firstRoll = getRandomInt(1, 6);
  let secondRoll = getRandomInt(1, 6);
  if (firstRoll === 1 || secondRoll === 1) {
    diceImg(firstRoll, secondRoll);
    oneRolled();
  } else {
    diceImg(firstRoll, secondRoll);
    roundTotal((firstRoll + secondRoll));
  }
});

function roundTotal(rollSum) {
  if (player1.classList.contains("active")) {
    currScore = document.querySelector("#current-0");
    currScore.innerHTML = parseInt(rollSum) + parseInt(currScore.innerHTML);
  } else {
    currScore = document.querySelector("#current-1");
    currScore.innerHTML = parseInt(rollSum) + parseInt(currScore.innerHTML);
  }
}

// Dice image change

function diceImg(imgNum, imgNum2) {
  const dice1 = document.querySelector("#dice1");
  const dice2 = document.querySelector("#dice2");
  if (imgNum === 1) {
    dice1.src = "Images/dice-1.png";
  } else if (imgNum === 2) {
    dice1.src = "Images/dice-2.png";
  } else if (imgNum === 3) {
    dice1.src = "Images/dice-3.png";
  } else if (imgNum === 4) {
    dice1.src = "Images/dice-4.png";
  } else if (imgNum === 5) {
    dice1.src = "Images/dice-5.png";
  } else if (imgNum === 6) {
    dice1.src = "Images/dice-6.png";
  }
  if (imgNum2 === 1) {
    dice2.src = "Images/dice-1.png";
  } else if (imgNum2 === 2) {
    dice2.src = "Images/dice-2.png";
  } else if (imgNum2 === 3) {
    dice2.src = "Images/dice-3.png";
  } else if (imgNum2 === 4) {
    dice2.src = "Images/dice-4.png";
  } else if (imgNum2 === 5) {
    dice2.src = "Images/dice-5.png";
  } else if (imgNum2 === 6) {
    dice2.src = "Images/dice-6.png";
  }
}

// New Game

const reset = document.querySelector(".btn-new");

reset.addEventListener("click", e => {
  location.reload();
});
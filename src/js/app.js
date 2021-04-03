function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const newGame = document.querySelector(`.btn-new`);
const roll = document.querySelector(`.btn-roll`);
const hold = document.querySelector(`.btn-hold`);
const dice1Icon = document.querySelector(`#dice1`);
const dice2Icon = document.querySelector(`#dice2`);
const player0Panel = document.querySelector(`.player-0-panel`);
const player0Round = document.querySelector(`#current-0`);
const player0Total = document.querySelector(`#score-0`);
const player1Panel = document.querySelector(`.player-1-panel`);
const player1Round = document.querySelector(`#current-1`);
const player1Total = document.querySelector(`#score-1`);

let roundScore = 0,
  currPlayer = 0,
  player0Score = 0,
  player1Score = 0;

const startNewGame = function () {
  totalTurnScore = 0;
  currPlayer = 0;
  player0Score = 0;
  player1Score = 0;

  dice1Icon.src = `dice-6.png`;
  dice2Icon.src = `dice-6.png`;

  player0Panel.classList.add(`active`);
  player1Panel.classList.remove(`active`);

  player1Round.textContent = 0;
  player1Total.textContent = 0;
  player1Round.textContent = 0;
  player1Total.textContent = 0;
}

const rollDice = function () {
  let dice1 = 0,
      dice2 = 0;

  dice1 = getRandomInt(1, 6);
  dice2 = getRandomInt(1, 6);

  dice1Icon.src = `dice-` + dice1 + `.png`;
  dice2Icon.src = `dice-` + dice2 + `.png`;

  if (dice1 == 1 || dice2 == 1) {
    alert(`You rolled a 1`);
    totalTurnScore = 0;
    holdDice();
  } else {
    totalTurnScore += dice1 + dice2;

    currPlayer == 0 ? player0Round.textContent = totalTurnScore : player1Round.textContent = totalTurnScore;
  }
}

const holdDice = function () {
  if (currPlayer == 0) {
    player0Score += totalTurnScore;
    player0Total.textContent = player0Score;
    totalTurnScore = 0;
    currPlayer++;
    player0Panel.classList.remove(`active`);
    player1Panel.classList.add(`active`);
  } else {
    player1Score += totalTurnScore;
    player1Total.textContent = player1Score;
    totalTurnScore = 0;
    currPlayer--;
    player0Panel.classList.add(`active`);
    player1Panel.classList.remove(`active`);
  }
  if (player0Score >= 100) {
    alert(`Player 1 wins!`);
    startNewGame();
  } else if (player1Score >= 100) {
    alert(`Player 2 wins!`);
    startNewGame();
  }
}

newGame.addEventListener(`click`, startNewGame);
roll.addEventListener(`click`, rollDice);
hold.addEventListener(`click`, holdDice);
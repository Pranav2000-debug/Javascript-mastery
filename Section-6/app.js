const startGamebtn = document.getElementById("start-game-btn");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const DEFAULT_USER_CHOICE = ROCK;
const DRAW_GAME = "draw";
const PLAYER_WINS = "player wins";
const COMPUTER_WINS = "computer wins";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt("rock, paper, or scissors", "").toLocaleLowerCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid choice! We chose ${DEFAULT_USER_CHOICE} as default`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const num = Math.random();
  if (num < 0.34) {
    console.log(num);
    return ROCK;
  } else if (num < 0.67) {
    console.log(num);
    return PAPER;
  } else {
    console.log(num);
    return SCISSORS;
  }
};

// = () =>
const getWinner = (compChoice, playerChoice = DEFAULT_USER_CHOICE) =>
  compChoice === playerChoice
    ? DRAW_GAME
    : (compChoice === ROCK && playerChoice === PAPER) ||
      (compChoice === PAPER && playerChoice === SCISSORS) ||
      (compChoice === SCISSORS && playerChoice === ROCK)
    ? PLAYER_WINS
    : COMPUTER_WINS;

startGamebtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  } and the computer picked ${computerSelection}, you `;
  if (winner === DRAW_GAME) {
    message = message + "DREW";
  } else if (winner === PLAYER_WINS) {
    message += "WON";
  } else {
    message += "LOST";
  }
  alert(message);
  gameIsRunning = false;
});



// const sum = (...numbers) => {
//   const validateNumber = (num) => {
//     return isNaN(num) ? 0 : num;
//   };
//   let total = 0;
//   for (const element of numbers) {
//     total += validateNumber(element);
//   }
//   return total;
// };
// console.log(sum(1, 2, 3, 4, 5));

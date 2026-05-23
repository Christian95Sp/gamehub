const bigcontainer = document.querySelector(".bigcontainer");
const Otext = "O";
const Xtext = "X";

let Xturn = true;
let count = 0;
let gameOver = false;
// `bigGame` now holds “which sub‐board to send the next player to” OR “which board we are checking for a win.”
let bigGame = null;

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Build 9 sub‐boards (each with 9 small boxes)
for (let i = 0; i < 9; i++) {
  let smallcontainer = document.createElement("div");
  smallcontainer.classList.add("container");
  smallcontainer.id = `container${i}`;
  bigcontainer.appendChild(smallcontainer);

  for (let j = 0; j < 9; j++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.id = `box${i}${j}`;
    smallcontainer.appendChild(div);
  }
}

// This “follower” just highlights the current sub‐board
const follower = document.createElement("div");
follower.className = "follower";
follower.id = "follower";
bigcontainer.appendChild(follower);

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  // each box can only ever be clicked once
  box.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  if (gameOver) return; // Prevent further moves after game over
  let box = e.target;
  // -------------------------------------------------------------------
  // STEP 1: extract both indices from "boxij"
  //    i = which sub‐board (0–8)
  //    j = which square within that sub‐board (0–8)
  // -------------------------------------------------------------------
  const boardIndex = parseInt(box.id.charAt(3), 10); // “i”
  const squareIndex = parseInt(box.id.charAt(4), 10); // “j”

  // -------------------------------------------------------------------
  // STEP 2: put “boardIndex” into bigGame so that checkWinner runs on that board
  // -------------------------------------------------------------------
  bigGame = boardIndex;

  if (Xturn) {
    box.textContent = Xtext;

    if (checkWinner(Xtext)) {
      addWinner(Xtext);
      console.log("X wins in sub‐board", boardIndex, "!");
    }

    // After checking for a win, set up for the next player:
    // next player must be “sent” to sub‐board = squareIndex
    bigGame = squareIndex;
    disableGames();
    moveFollower();
    Xturn = false;
  } else {
    box.textContent = Otext;

    if (checkWinner(Otext)) {
      addWinner(Otext);
      console.log("O wins in sub‐board", boardIndex, "!");
    }

    // send next player to sub‐board = squareIndex
    bigGame = squareIndex;
    disableGames();
    moveFollower();
    Xturn = true;
  }

  console.log("Next turn:", Xturn ? "X" : "O");
}

// Only boxes inside sub‐board = bigGame remain clickable; the others get pointerEvents="none"
function disableGames() {
  // Check if the target sub-board already has a winner
  const targetContainer = document.getElementById(`container${bigGame}`);
  const targetHasWinner =
    targetContainer && targetContainer.querySelector(".winner-overlay");

  boxes.forEach((box) => {
    const container = box.parentElement;
    // Always disable boxes in sub-boards that have a winner
    if (container.querySelector(".winner-overlay")) {
      box.style.pointerEvents = "none";
    } else if (!targetHasWinner && box.id.startsWith(`box${bigGame}`)) {
      // If the target sub-board does NOT have a winner, enable only its boxes
      box.style.pointerEvents = "auto";
    } else if (targetHasWinner) {
      // If the target sub-board HAS a winner, enable all boxes in sub-boards without a winner
      box.style.pointerEvents = "auto";
    } else {
      box.style.pointerEvents = "none";
    }
  });
}

// Visually move the “follower” highlight to whichever .containerN is now bigGame
function moveFollower() {
  const current = document.getElementById(`container${bigGame}`);
  if (!current) return;

  const rect = current.getBoundingClientRect();
  const parentRect = bigcontainer.getBoundingClientRect();

  follower.style.left = rect.left - parentRect.left + "px";
  follower.style.top = rect.top - parentRect.top + "px";
  follower.style.visibility = "visible";
}

// Looks inside sub‐board = bigGame and checks for any 3‐in‐a‐row
function checkWinner(turn) {
  // Grab all 9 “boxes” whose id starts with "boxN" where N = bigGame
  const smallBoxes = document.querySelectorAll(`[id^=box${bigGame}]`);

  return wins.some((combination) => {
    return combination.every((index) => {
      // index ranges 0..8 and lines up with how we appended them (j=0..8)
      return smallBoxes[index].textContent === turn;
    });
  });
}

function addWinner(turn) {
  const winnerOVerlay = document.createElement("div");
  winnerOVerlay.className = "winner-overlay";
  winnerOVerlay.textContent = `${turn}`;
  const current = document.getElementById(`container${bigGame}`);
  if (!current) return;

  // Position overlay to fill the container
  winnerOVerlay.style.width = "101%";
  winnerOVerlay.style.height = "101%";
  winnerOVerlay.style.visibility = "visible";

  current.appendChild(winnerOVerlay);

  // Record the winner for this sub-board
  bigWinners[bigGame] = turn;

  // Check for overall winner
  if (checkBigWinner(turn)) {
    setTimeout(() => {
      alert(`${turn} wins the game!`);
    }, 100);
    gameOver = true; // <-- Add this line
    bigcontainer.style.pointerEvents = "none";
    boxes.forEach((box) => {
      box.style.pointerEvents = "none";
    });
  }
}

function checkBigWinner(turn) {
  return wins.some((combination) => {
    return combination.every((index) => bigWinners[index] === turn);
  });
}
let bigWinners = Array(9).fill(null); // Track winner of each sub-boardlet bigWinners = Array(9).fill(null); // Track winner of each sub-board

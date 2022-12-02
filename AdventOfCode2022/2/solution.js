const fs = require("fs");
const data = fs
  .readFileSync("./data.txt", "utf-8")
  .split("\n")
  .map((x) => x.split(" "));

//I feel like this could be much simpler :/

//Points
const rock = 1;
const paper = 2;
const scissors = 3;

const lose = 0;
const draw = 3;
const win = 6;

let opponentScore = 0;
let myScore = 0;

data.forEach((round) => {
  if (round[0] === "A") {
    opponentScore += rock;
    if (round[1] === "X") {
      myScore += rock;
      // Draw
      opponentScore += draw;
      myScore += draw;
    } else if (round[1] === "Y") {
      myScore += paper;
      // Win
      myScore += win;
    } else {
      myScore += scissors;
      // Lose
      opponentScore += win;
    }
  } else if (round[0] === "B") {
    opponentScore += paper;
    if (round[1] === "X") {
      myScore += rock;
      // Lose
      opponentScore += win;
    } else if (round[1] === "Y") {
      myScore += paper;
      // Draw
      opponentScore += draw;
      myScore += draw;
    } else {
      myScore += scissors;
      // Win
      myScore += win;
    }
  } else {
    opponentScore += 3;
    if (round[1] === "X") {
      myScore += rock;
      // Win
      myScore += win;
    } else if (round[1] === "Y") {
      myScore += paper;
      // Lose
      opponentScore += win;
    } else {
      myScore += scissors;
      // Draw
      opponentScore += draw;
      myScore += draw;
    }
  }
});

console.log(myScore);
console.log(opponentScore);

//pt 2

data.forEach((round) => {
  if (round[0] === "A") {
    opponentScore += rock;
    if (round[1] === "X") {
      myScore += lose;
      opponentScore += win;
      myScore += scissors;
    } else if (round[1] === "Y") {
      myScore += draw;
      opponentScore += draw;
      myScore += rock;
    } else {
      myScore += win;
      opponentScore += lose;
      myScore += paper;
    }
  } else if (round[0] === "B") {
    opponentScore += paper;
    if (round[1] === "X") {
      myScore += lose;
      opponentScore += win;
      myScore += rock;
    } else if (round[1] === "Y") {
      myScore += draw;
      opponentScore += draw;
      myScore += paper;
    } else {
      myScore += win;
      myScore += scissors;
    }
  } else {
    opponentScore += 3;
    if (round[1] === "X") {
      myScore += lose;
      myScore += paper;
    } else if (round[1] === "Y") {
      myScore += draw;
      opponentScore += draw;
      myScore += scissors;
    } else {
      myScore += win;
      opponentScore += lose;
      myScore += rock;
    }
  }
});

console.log(myScore);
console.log(opponentScore);

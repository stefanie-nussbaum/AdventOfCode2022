const fs = require("fs");
const data = fs
  .readFileSync("./data.txt", "utf-8")
  .split("\n\n")
  .map((elf) => elf.split("\n"));

function findTheBigCalorieElf(data) {
  let highestCalorie = 0;
  let calorieCounts = [];

  data.forEach((elf) => {
    let total = 0;
    elf.forEach((snak) => {
      total += Number(snak);
    });
    calorieCounts.push(total);
    if (total > highestCalorie) {
      highestCalorie = total;
    }
  });
  console.log(highestCalorie);

  //pt. 2
  let sortedCalories = calorieCounts
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  console.log(sortedCalories[0] + sortedCalories[1] + sortedCalories[2]);
}

findTheBigCalorieElf(data);

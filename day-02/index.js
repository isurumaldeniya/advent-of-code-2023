import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
// console.log(inputArray)

const maxBlue = 14;
let maxGreen = 13;
let maxRed = 12;

let total = 0

for (let i = 0; i < inputArray.length; i++) {
  let games = inputArray[i].split(':')[1];
  let picks = games.split(';');
  // console.log(picks)
  let isValidPick = true;
  for (let j = 0; j < picks.length; j++) {
    let cubes = picks[j].trim().split(',');
    // console.log(cubes)
    for (let k = 0; k < cubes.length; k++) {
      const numberOfCubes = cubes[k].trim().split(' ')[0];
      const color = cubes[k].trim().split(' ')[1];

      switch (color) {
        case "green":
          if (numberOfCubes > maxGreen) {
            isValidPick = false;
            break
          }
          break;
        case "blue":
          if (numberOfCubes > maxBlue ) {
            isValidPick = false;
            break
          }
          break;
        case "red":
          if (numberOfCubes > maxRed ) {
            isValidPick = false;
            break
          }
          break;
        default:
          break;
      }

      if (isValidPick === false) {
        break
      }
    }

    if (isValidPick === false) {
      break
    }
  }
  // console.log(isValidPick)
  if (isValidPick === true) {
    //since i start from 0 we need to add +1 to it
    total = total + i + 1
  }
}

console.log(total)
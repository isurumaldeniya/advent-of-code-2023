import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
// console.log(inputArray)


let total = 0

for (let i = 0; i < inputArray.length; i++) {
  let minBlue = 0;
  let minGreen = 0;
  let minRed = 0;

  let games = inputArray[i].split(':')[1];
  let picks = games.split(';');
  // console.log(picks)

  for (let j = 0; j < picks.length; j++) {
    let singPick = picks[j].trim().split(',');
    // console.log(singPick)

    for (let k = 0; k < singPick.length; k++) {
      const numberOfCubes = singPick[k].trim().split(' ')[0];
      const color = singPick[k].trim().split(' ')[1];
      // console.log(numberOfCubes, color)
      
      if(color === 'red'){
        minRed = Math.max(numberOfCubes , minRed);
      }
      else if(color === 'green'){
        minGreen = Math.max(numberOfCubes , minGreen);
      }
      else if(color === 'blue'){
        minBlue = Math.max(numberOfCubes , minBlue);
      }
    }

    
  }
  total = total + (minGreen * minBlue * minRed)
  // console.log(total)
}
console.log(total)
import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const gameArray = []
inputArray.map((entry) => {
  gameArray.push(entry.split(':')[1].trim().split(' | '));
})

let sum = 0;

gameArray.map((game) => {
  const cardNumbers = game[0].split(' ');
  const winningNumbers = game[1].split(' ')
  console.log(cardNumbers, winningNumbers)
  let count = 0;
  for (let i = 0; i < cardNumbers.length; i++) {
    for (let j = 0; j < winningNumbers.length; j++) {
      if (cardNumbers[i] == '') {
        continue
      }
      if (cardNumbers[i] == winningNumbers[j]) {

        if (count === 0) {
          count = 1;
        } else {

          count = count * 2;
        }
        // console.log(count)
      }
    }
    console.log(count)
  }
  sum += count;

})
console.log(sum)
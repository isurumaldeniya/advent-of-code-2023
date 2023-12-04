import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

let total = 0;

for (let i = 0; i < inputArray.length; i++) {
  let firstNumber;
  let lastNumber;
  let number;
  const currentWord = inputArray[i];
  for (let j = 0; j < currentWord.length; j++) {
    if (!!Number(currentWord[j])) {
      firstNumber = currentWord[j];
      break
    }
  }

  for (let j = currentWord.length; j > 0; j--) {
    if (!!Number(currentWord[j - 1])) {
      lastNumber = currentWord[j - 1];
      break
    }
  }

  number = Number(firstNumber + lastNumber);
  total += number;
}
console.log(total)
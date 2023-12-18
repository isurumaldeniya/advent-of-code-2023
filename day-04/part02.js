import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const gameArray = []
inputArray.map((entry) => {
  gameArray.push(entry.split(':')[1].trim().split(' | '));
})

//keep track of the current card number
let index = 1;
let cards = [];

gameArray.map((game) => {
  const cardNumbers = game[0].split(' ');
  const winningNumbers = game[1].split(' ')
  let count = 0;
  for (let i = 0; i < cardNumbers.length; i++) {
    for (let j = 0; j < winningNumbers.length; j++) {
      if (cardNumbers[i] == '') {
        continue
      }
      if (cardNumbers[i] == winningNumbers[j]) {
        count = count + 1;
        // console.log(count)
      }
    }
  }

  //pushing the card number to the cards array
  cards.push(index);


  //calculate the no of current card occurrences in the array 
  const valueOccurrence = cards.filter((value) => (value === index)).length;
  // console.log(valueOccurrence)

  //for each card occurrence add next card according to the count value
  for (let m = 0; m < valueOccurrence; m++) {
    for (let k = 1; k <= count; k++) {
      cards.push(index + k)
    }
  }
  index++;

})
console.log(cards.length)
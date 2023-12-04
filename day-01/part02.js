import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

// console.log(inputArray);

const numbersArray = [{ word: 'one', number: '1' }, { word: 'two', number: '2' }, { word: 'three', number: '3' },
{ word: 'four', number: '4' }, { word: 'five', number: '5' }, { word: 'six', number: '6' }, { word: 'seven', number: '7' },
{ word: 'eight', number: '8' }, { word: 'nine', number: '9' }]

let total = 0;

for (let i = 0; i < inputArray.length; i++) {
  let numArray = []
  let matches = [];
  console.log(inputArray[i])
  numbersArray.map((number) => {

    // let regex = new RegExp(number.word, 'g');

    // let inputString = 'vggvnhqkjseventwo4onetwonftrnd';
    // let substringToFind = number.word;
    
    let startIndex = 0;

    while (startIndex !== -1) {
      startIndex = inputArray[i].indexOf(number.word, startIndex);

      if (startIndex !== -1) {
        matches.push({ match: number.number, index: startIndex });
        startIndex += number.word.length;
      }
    }

    startIndex = 0
    while (startIndex !== -1) {
      startIndex = inputArray[i].indexOf(number.number, startIndex);

      if (startIndex !== -1) {
        matches.push({ match: number.number, index: startIndex });
        startIndex += number.number.length;
      }
    }

    // console.log(matches)
    // if (inputArray[i].includes(number.word)) {
    //   let index = inputArray[i].indexOf(number.word);
    //   numArray.push({ index, number: number.number })
    // }

    // if (inputArray[i].includes(number.number)) {
    //   let index = inputArray[i].indexOf(number.number);
    //   numArray.push({ index, number: number.number })
    // }

  })

  //sorting array with index
  matches.sort((a, b) => a.index - b.index);
  // console.log(numArray)
  console.log(matches)
  let number = 0
  if (matches.length === 1) {
    number = matches[0].match + matches[0].match;
  } else {
    number = matches[0].match + matches[matches.length - 1].match
  }
  console.log(number)

  total = total + Number(number);
}

console.log(total)
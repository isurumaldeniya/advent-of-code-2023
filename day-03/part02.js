import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const directions = [
  [-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1],
]

let rowLength = inputArray.length;
let colLength = inputArray[0].length;
let numbers = [];

function returnStarPoint(row, col, dirArray) {
  for (let point = 0; point < dirArray.length; point++) {
    let [pointX, pointY] = dirArray[point];

    let currRow = row + pointY;
    let currCol = col + pointX;

    //check if the current point is out of the array
    if ((currRow >= 0 && currRow < rowLength) && (currCol >= 0 && currCol < colLength)) {

      //check current point is not a number and  a '*' and return the current position
      if (isNaN(Number(inputArray[currRow][currCol])) && inputArray[currRow][currCol] === '*') {

        return `${currRow}-${currCol}`
      }
    }
  }
  return false
}


const newArray = [];
let firstEntry = false;
function setMap(key, value) {

  //adding the first entry to the array as a object
  if (!firstEntry) {
    let newObject = {};
    newObject[key] = [value]
    newArray.push(newObject)
    firstEntry = true;
    return
  }

  let isFound = false;
  newArray.map((entry) => {
    // console.log(Object.keys(entry)[0] == key)
    // console.log(key).

    //checking the keys of the object to match the key of the new entry
    if (Object.keys(entry)[0] == key) {
      Object.values(entry)[0].push(value)
      isFound = true;
      return
    }
  })
  if (!isFound) {

    let newObject = {};
    newObject[key] = [value]
    newArray.push(newObject)
    return
  }

}


for (let row = 0; row < rowLength; row++) {
  let number = '';
  for (let col = 0; col < colLength; col++) {
    let check = false;
    let entry = inputArray[row][col];

    if (isNaN(entry)) {
      //if not number go to the next entry
      continue
    }
    number += entry;


    //when number found append all the numbers next to that number
    while (++col < colLength) {

      //check the directions around the number and update the check status
      if (!check) {
        //decrease col by 1 to make sure stay in the correct position
        //checking the '*' and return the current position of the '*'
        check = returnStarPoint(row, col - 1, directions)
      }
      if (Number.isInteger(parseInt(inputArray[row][col]))) {
        number += inputArray[row][col]
      } else {

        //when next entry is not a number break the for loop and check for next number
        break
      }
    }

    if (check) {

      //add star position and respective value to the new number array
      setMap(check, number)
      check = false;
      //adding numbers to the numbers array
      numbers.push(Number(number))
    }
    //reset the number for the row
    check = false;
    number = ''
  }


}
// console.log(numbers.reduce((a, c) => a + c, 0))
// console.log(newSet)

let gearRatio = 0;

newArray.map((entry) => {
  // console.log(Object.values(entry)[0])
  //check for entries with only two gear parts
  if (Object.values(entry)[0].length == 2) {
    gearRatio += Number(Object.values(entry)[0][0]) * Number(Object.values(entry)[0][1]);
  }
})

console.log(gearRatio)
import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const directionsOfStartDigit = [
  [0, 1], [0, -1], [-1, -1], [-1, 0], [-1, 1]
]

const directionsOfEndDigit = [
  [1, -1], [1, 0], [1, 1], [0, 1], [0, -1]
]

const directionsOfMiddleDigits = [
  [0, 1], [0, -1]
]

function checkDot(entry) {
  if (entry == '.') {
    return true
  } return false
}

function checkDirStartDigit(y, x, dirArray) {
  for (let m = 0; m < dirArray.length; m++) {
    let [pointX, pointY] = dirArray[m]
    let currY = y + pointY;
    let currX = x + pointX;
    // console.log(dirArray[m])
    if ((currY >= 0 && currY < inputArray.length) && (currX >= 0 && currX < inputArray[0].length)) {
      if (!Number(inputArray[currY][currX])) {
        // console.log(inputArray[currY][currX])
        if (!checkDot(inputArray[currY][currX])) {
          return true
        }
      }
    }
  }
  return false
}

let sum = 0;

for (let i = 0; i < inputArray.length; i++) {
  let number = '';

  for (let j = 0; j < inputArray[i].length; j++) {
    let entry = inputArray[i][j]
    console.log(j)
    if ((Number(entry) || Number(entry) == 0)) {
      number = number + entry
      // console.log(number)
      // console.log(!inputArray[i][j+1])
    } if ((!Number(entry) || !inputArray[i][j + 1]) && Number(entry) != 0) {
      //get the adjust digits to combine and make the whole number
      if (Number(number)) {
        console.log(number)

        for (let l = 0; l < number.length; l++) {
          console.log('number:------' + number[l])
          let y = i;
          j = j == inputArray.length - 1 ? j + 1 : j;
          let x = l + j - number.length ;
          console.log(y, x)

          if (number.length == 1) {
            if (checkDirStartDigit(y, x, directionsOfStartDigit) || checkDirStartDigit(y, x, directionsOfEndDigit) || checkDirStartDigit(y, x, directionsOfMiddleDigits)) {
              // console.log(number)
              fs.appendFileSync('./output.txt', number + '\n')
              sum = sum + Number(number)
            }
          } else {
            if (l == 0) {
              if (checkDirStartDigit(y, x, directionsOfStartDigit)) {
                // console.log(number)
                fs.appendFileSync('./output.txt', number + '\n')
                sum = sum + Number(number)
                break
              }
            }
            else if (l == number.length - 1) {
              if (checkDirStartDigit(y, x, directionsOfEndDigit)) {
                // console.log(number)
                fs.appendFileSync('./output.txt', number + '\n')
                sum = sum + Number(number)
                break
              }
            }
            else {
              if (checkDirStartDigit(y, x, directionsOfMiddleDigits)) {
                // console.log(number)+
                fs.appendFileSync('./output.txt', number + '\n')
                sum = sum + Number(number)
                break
              }
            }
          }
        }
      }
      //reset the number
      number = ''
    }

  }
}
console.log(sum)
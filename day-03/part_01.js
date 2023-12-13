import fs from 'fs';


function hasSymbol(str) {
  if (str?.length && str.split('').find(x => isNaN(x) && x !== '.')) {

    return true
  }
  return false
}


fs.readFile("input.txt", 'utf-8', (err, data) => {
  const input = data.split('\n').filter((n) => n);
  let rows = input.length;
  let cols = input[0].length;

  // console.log(input, rows, cols)

  let founds = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const n = "" + input[i][j];

      if (isNaN(n)) continue;

      let num = n;
      while (++j < cols) {
        if (Number.isInteger(parseInt(input[i][j]))) {
          num += input[i][j]
        } else {
          break
        }
      }

      const top = i === 0 ? "" : input[i - 1].substring(j - num.length - 1, j + 1);
      const btm = i === rows - 1 ? "" : input[i + 1].substring(j - num.length - 1, j + 1);
      const left = input[i][j - num.length - 1] || "";

      //j will be one after the number when we get out of the while loop so we need j not j + 1
      const right = input[i][j] || ""

      if (hasSymbol(top) || hasSymbol(btm) || hasSymbol(left) || hasSymbol(right)) {
        console.log(num)
        fs.appendFileSync('./out.txt', num + '\n')
        founds.push(Number(num))
      }
    }
  }
  // console.log(founds)
  console.log(founds.reduce((a, c) => a + c, 0));
})
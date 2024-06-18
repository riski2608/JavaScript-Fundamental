let rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = '';

  for (let j = 0; j < rows - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    line += '#';
  }
  for (let j = 0; j < rows - i; j++) {
    line += ' ';
  }
  console.log(line);
}


// let rows = 5; // Jumlah baris pada piramida

// for (let i = 1; i <= rows; i++) {
//   let spaces = ' '.repeat(rows - i);
//   let hashes = '#'.repeat(2 * i - 1);
//   console.log(spaces + hashes + spaces);
// }


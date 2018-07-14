const fs = require('fs');

const cols = 8;

const arrNested = ['(', '[', '{', '<', ')', ']', '}', '>']

function randomChar () {
  return arrNested[Math.floor(Math.random() * (7-0) + 0)];
}

function randomString (length) {
  let string = '';
  for (let i = 0; i < length; i++) {
    string += randomChar();
  }
  return string;
}

function randomRow () {
  const cells = [];
  for (let i = 0; i < cols; i++) {
    cells.push(randomString(20));
  }
  return cells.join('');
}

async function writeRow (stream) {
  return new Promise((resolve, reject) => {
    stream.write(randomRow(), 'utf8', () => resolve());
  });
}

async function createCSVs (sizes) {
  sizes.forEach(async size => {
    const stream = fs.createWriteStream(`dummy${size}.csv`);
    for (let i = 0; i < size; i++) {
      await writeRow(stream);
    }
    stream.end();
  });
}

createCSVs([1000, 10000, 100000]);
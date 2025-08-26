const character = '#';
rows = [];

for (let i = 0; i < 10; i = i + 1) {
  rows.push(character.repeat(i));
}

console.log(rows);
rows.forEach((baris) => console.log(baris));

const character = '#';
const rows = [];
const totalRows = 5;

for (let i = 0; i < totalRows; i++) {
  const spasi = ' '.repeat(i);
  const pagar = character.repeat(2 * (totalRows - i) -1);
  rows.push(spasi + pagar + spasi);
}
rows.forEach((baris) => console.log(baris));

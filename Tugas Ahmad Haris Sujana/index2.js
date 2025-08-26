var readBooksPromise = require('./promise.js');

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  {name: "Komik", timeSpent: 1000}
];

// Lanjutkan code untuk menjalankan function readBooksPromise

function bacaSemuaBuku(waktu, i) {
    if(i < books.length) {
        readBooksPromise(waktu, books[i])
        .then((waktuBaru) => {
            bacaSemuaBuku(waktuBaru, i + 1);
        })
        .catch(() => {
            console.log("Waktu Habis!!1")
        })
    }
}

bacaSemuaBuku(10000, 0);

// readBooksPromise(10000, books[0]).then((pesan) => {
//     console.log("Succes: ", pesan)
// }). catch((error) => {
//     console.error("Error: ", error)
// })
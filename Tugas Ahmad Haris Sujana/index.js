//sambungan ke index.js

let readBooks = require("./tugas");

var books = [
    {name: "LOTR", timeSpent: 3000},
    {name: "Fidas", timeSpent: 2000},
    {name: "Kalkulus", timeSpent: 4000},
    {name: "Komik", timeSpent: 1000},
]

function bacaSemuaBuku(waktu, i) {
    if (i < books.length) {
        readBooks(waktu, books[i], function(sisaWaktu) {
            bacaSemuaBuku(sisaWaktu, i + 1);
        });
    } else {
        console.log("Selesai Membaca!!!");
    }
}

bacaSemuaBuku(10000, 0);


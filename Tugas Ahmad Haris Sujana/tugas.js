//membuat function
function readBooks(time, book, callback) {
    console.log(`Saya Membaca ${book.name}`);
    setTimeout(() => {
        let sisaWaktu = 0;
        if(time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log(`Saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`);
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log(`Waktu saya habis`);
            callback(time);
        }
    }, book.timeSpent)
}

module.exports = readBooks;
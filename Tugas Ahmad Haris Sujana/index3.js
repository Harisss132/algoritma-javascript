let filterBooksPromise = require('./promise2.js');

// Lanjutkan code untuk menjalankan function filterBooksP romise
filterBooksPromise(true,50).then((pesan) => {
    console.log("Success", pesan);
}).catch((error) => {
    console.log("Error: ", error);
})

async function fillterBuku() {
    //dengan jumlah halaman 250 dan isColor = false
    try {
    const buk = await filterBooksPromise(false, 250);
    console.log("Success: ", buk)
    } catch(e) {
        console.error("Error: ", e.message);
    }
    //dengan jumlah halaman 30 dan isColor = true

      try {
        const bok = await filterBooksPromise(true, 30);
        console.log("Success: ", bok)
    } catch(e) {
        console.error("Error: ", e.message)
    }
    
}
fillterBuku();
// fillterBuku2();
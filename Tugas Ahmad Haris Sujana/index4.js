var filterCarsPromise = require('./promise3.js');

// Lanjutkan code untuk menjalankan function filterCars

filterCarsPromise("black",2019).then((pesan) => {
    console.log(pesan);
}).catch((error) => {
    console.error("Error: ",error)
})

// filterCarsPromise("silver",2017).then((pesan) => {
//     console.log(pesan);
// }).catch((error) => {
//     console.error("Error: ",error)
// })

function filterPromise(color, year) {
    filterCarsPromise(color, year).then(
        (car) => console.log(car)
    ).catch((e) => console.log(e.message))
}

async function filterMobil() {
    //dengan color abu-abu dan tahun 2019
    try {
        const mbil19 = await filterCarsPromise("grey", 2019);
        console.log(mbil19)
    } catch(e) {
        console.error("Error: ", e.message);
    }
    
    try {
        const mbil18 = await filterCarsPromise("grey", 2018);
        console.log(mbil18)
    } catch(e) {
        console.error("Error: ", e.message);
    }
    
    try {
        const grey18 = await filterCarsPromise("black", 2020);
        console.log(grey18)
    } catch(e) {
        console.error("Error: ", e.message);
    }
}


filterPromise("silver", 2017);
filterMobil();

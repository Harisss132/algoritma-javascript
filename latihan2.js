function panggilPasien(nomor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nomor <= 10) {
                resolve (`Pasien nomor ${nomor}, silahkan masuk`);
            } else {
                reject (`Pasien nomor ${nomor} tidak ada di daftar antrian`);
            }
        }, 1000);
    });
}

panggilPasien(10).then((pesan) => {
    console.log(`Susscess: `, pesan);
}).catch((error) => {
    console.error(`Error: `, error);
});
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

async function prosesAntrian(nomor) {
    try {
        console.log("Proses sedang berjalan...");
        let pesan = await panggilPasien(nomor);
        console.log(`Success: `, pesan)
    } catch(error) {
        console.error("Error: ", error);
    }
}

prosesAntrian(11);
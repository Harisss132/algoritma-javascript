// contoh program asynchronus
// setTimeout(function () {
//     console.log("saya di jalankan belakangan");
// }, 3000);

// console.log("Saya dijalankan pertama");

// callback
// function sapa(nama) {
//     console.log(`Halo, ${nama}`);
// }

// function prosesNama(callback) {
//     let nama = "Wakwaw";
//     callback(nama);
// }

// prosesNama(sapa);

// contoh callback sync

// function hitung(angka1, angka2, operasi) {
//     console.log(`Menjalankan perhitungan untuk ${angka1} dan ${angka2}`);
//     const hasil = operasi(angka1,angka2);
//     console.log(`hasilnya adalah ${hasil}`);
// }

// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }

// hitung(10, 11, tambah);
// hitung(10, 11, kali);

//Asynchronus callback

const selesai = () => {
    console.log("Proses Selesai...")
}

const berjalan = () => {
    console.log("Proses sedang berjalan...")
}

console.log("Mulai Proses...");
setTimeout(selesai, 2000);
setTimeout(berjalan, 1000); 


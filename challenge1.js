const kategoriUsia = (usia) => {
    if (typeof usia != "number" || usia < 0) {
        return "Usia Invalid"
    } else {
        if (usia <= 12) {
            return "Anak-Anak"
        } else if (usia >= 13 && usia <= 19) {
            return "Remaja"
        } else if (usia >= 20 && usia <= 35) {
            return "Dewasa"
        } else if (usia >= 36) {
            return "Lanjut usia"
        }
    }
}

console.log("============ Soal Satu ============");

console.log(kategoriUsia(8));
console.log(kategoriUsia(15));
console.log(kategoriUsia(25));
console.log(kategoriUsia(40));


const hitungBiayaParkir = (lamaParkir, hari, liburNasional) => {
    if (typeof lamaParkir != 'number') {
        return "Invalid Input"
    } else if (liburNasional != true && liburNasional != false) {
        return "Invalid Input"
    } else if (hari.toLowerCase() != 'senin' && hari.toLowerCase() != 'selasa' && hari.toLowerCase() != 'rabu' && hari.toLowerCase() != 'kamis' && hari.toLowerCase() != 'jumat' && hari.toLowerCase() != 'sabtu' && hari.toLowerCase() != 'minggu') {
        return "Invalid Input"
    } else {
        let total = 0

        if (lamaParkir <= 1) {
            total = 10000
        } else if (lamaParkir >= 2 && lamaParkir <= 5) {
            total = 10000 + ((lamaParkir - 1) * 5000) 
        } else if (lamaParkir > 5) {
            total = 10000 + ((lamaParkir - 1) * 5000) - 10000
        }
        
        if (hari.toLowerCase() == 'minggu') {
            total += 5000
        }
        
        if (total > 30000 && liburNasional === true) {
            total -= 7000
        }

        return total
    }
}

console.log("============ Soal Dua ============");

console.log(hitungBiayaParkir(2, 'Sabtu', false));
console.log(hitungBiayaParkir(6, 'Minggu', true));

/**

Soal Latihan: Penjadwalan Acara Festival

Sebuah kota sedang mempersiapkan festival tahunan mereka. 
Mereka ingin membuat sistem otomatis untuk menentukan acara yang akan dijalankan berdasarkan berbagai kondisi. 
Anda diminta untuk membantu membangun fungsi penjadwalan ini.
 
Kriteria Penjadwalan:
1. Jika hari itu hujan dan anginnya kencang (angin > 20 km/jam), maka semua acara di luar ruangan akan dibatalkan.
2. Jika hujan tapi anginnya tidak terlalu kencang, acara di luar ruangan akan dipindahkan ke dalam ruangan.
3. Jika suhu di bawah 5°C, acara konser malam harus diganti dengan acara indoor.
4. Jika hari cerah dan suhu di atas 25°C, tambahkan acara "Pesta Es Krim" di siang hari.
5. Jika hari Minggu dan cerah, tambahkan acara "Maraton Senja".
6. Setiap hari, tanpa memandang kondisi cuaca, akan selalu ada "Pameran Seni" di dalam ruangan.

Tugas Anda adalah untuk membuat fungsi jadwalFestival(hari, cuaca, suhu, angin) yang menerima parameter:
1. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
2. cuaca (string): 'Hujan' atau 'Cerah'.
3. suhu (number): Suhu hari itu dalam °C.
4. angin (number): Kecepatan angin dalam km/jam.

Fungsi ini harus mengembalikan sebuah string yang berisi daftar acara yang akan diadakan berdasarkan kondisi yang diberikan.

*/

const jadwalFestival = (hari, cuaca, suhu, angin) => {
    if (hari.toLowerCase() != 'senin' && hari.toLowerCase() != 'selasa' && hari.toLowerCase() != 'rabu' && hari.toLowerCase() != 'kamis' && hari.toLowerCase() != 'jumat' && hari.toLowerCase() != 'sabtu' && hari.toLowerCase() != 'minggu') {
        return "Invalid Input"
    } else if (cuaca.toLowerCase() != 'cerah' && cuaca.toLowerCase() != 'hujan') {
        return "Invalid Input"
    } else if (typeof suhu != 'number' || typeof angin != 'number') {
        return "Invalid Input"
    } else {
        let daftarAcara = "Daftar Acara : Pameran Seni, "

        if (cuaca.toLowerCase() == 'hujan' && angin > 20) {
            daftarAcara += ""
        }

        if (cuaca.toLowerCase() == 'hujan' && angin < 20) {
            daftarAcara += "Acara Dalam Ruangan"
        }

        if (suhu < 5) {
            daftarAcara += "Acara Indoor"
        }

        if (cuaca.toLowerCase() == 'cerah' && suhu > 25) {
            daftarAcara += "Pesta Es Krim,"
        }

        if (hari.toLowerCase() == 'minggu' && cuaca.toLowerCase() == 'cerah') {
            daftarAcara += " Marathon Senja"
        }
        
        return daftarAcara
    }
}

console.log("============ Soal Tiga ============");

console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
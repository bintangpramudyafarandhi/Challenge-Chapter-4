/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */

let fruits = ['apple', 'banana', 'cherry']
// console.log(fruits);
// Output: ['apple', 'banana']


/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari array tersebut.
 */

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
// console.log(bulkAlphabet);
// Output: 5


/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34]


/**
 * Gabungkan Dua Array, berikut dengan ketentuan:
 * 1. Menggunakan built in function
 * 2. Tidak menggunakan built in function
 * 
 * [1, 2, 3] dan [4, 5, 6]
 */
let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
let result1
// console.log(result1);
// Output : [1, 2, 3, 4, 5, 6]


/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []

arr3.forEach(function(item) {
    if (item % 2 != 0) {
        angkaGanjil.push(item)
    }
})

console.log(angkaGanjil); // [1, 3, 5, 7, 9]


/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */

let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// Output : [9, 6, 5, 4, 3, 2, 1]


/**
 * Menggabungkan Array dengan Spesifik
 * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
 * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
 */

// let kumpulanAngka = [1, 2, 3]
// let kumpulanHuruf = ["a", "b", "c"]
// let result = []

// kumpulanHuruf.forEach(function(huruf) {
//     if (result.length == 0 || typeof result[result.length-1] != 'string') {
//         result.push(huruf)
//     } else {
//         kumpulanAngka.forEach(function (angka) {
//             result.push(angka)
//         })
//     }
// })

// console.log(result);

let kumpulanAngka = [1, 2, 3];
let kumpulanHuruf = ["a", "b", "c"];
let hasil = [];

for (let i = 0; i < kumpulanAngka.length; i++) {
  hasil.push(kumpulanHuruf[i]);
  hasil.push(kumpulanAngka[i]);
}

console.log(hasil);

/**
 * Subarray dengan jumlah terbesar
 *  
 * Dari sebuah array angka, temukan subarray (array dalam array) dengan jumlah elemen yang paling besar. 
 * Misalnya dari array [2, 3, -4, 5, 7, -8, 6, 4], subarray dengan jumlah terbesar adalah [2, 3, -4, 5, 7] dengan total 13.
 */


/**
 * Urutkan berdasarkan Frekuensi:
 * Dari sebuah array, urutkan elemennya berdasarkan frekuensi kemunculannya. 
 * Jika dua elemen memiliki frekuensi yang sama, urutkan berdasarkan angkanya. 
 * Misalnya dari array [3, 2, 2, 8, 3, 4, 4], hasil yang diharapkan adalah [3, 3, 2, 2, 4, 4, 8]
 */

function sortByFrequency(arr) {
  return arr.sort((a, b) => {
      let countA = arr.filter(n => n === a).length;
      let countB = arr.filter(n => n === b).length;
      return countB - countA || a - b;
  });
}

let numbers = [3, 2, 2, 8, 3, 4, 4];
console.log(sortByFrequency(numbers));
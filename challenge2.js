for (let index = 1; index <= 20; index++) { // ANGKA GENAP DARI 1 SAMPAI 20
   if (index % 2 === 0) {
      console.log(index);
   } else {
      continue;
   }
}

let total = 0 // JUMLAH ANGKA DARI 1 HINGGA 100
for (let i = 1; i <= 100; i++) {
   total += i
}
console.log(total);

let bintang = "" // POLA SEGITIGA NAIK
for (let i = 1; i <= 5; i++) {
   console.log(bintang += "*");
}

let segitigaTerbalik = "*****" // POLA SEGITIGA TERBALIK
for (let i = 5; i >= 1; i--) {
   console.log(segitigaTerbalik.slice(undefined, i));

}

function diamond(l) { // POLA BERLIAN
   const star = '*', space = ' ';
   for (let i = 1; i <= l; i += 2) {
      let line = space.repeat((l - i) / 2) + star.repeat(i);
      console.log(line);
   }
   for (let i = l - 2; i >= 1; i -= 2) {
      let line = space.repeat((l - i) / 2) + star.repeat(i);
      console.log(line);
   }
}

diamond(11);

let result = "" // POLA BILANGAN 1*2*3
for (let i = 1; i <= 5; i++) {
   if (result !== "") {
      result += "*"
   }
   result += i
   console.log(result);
}

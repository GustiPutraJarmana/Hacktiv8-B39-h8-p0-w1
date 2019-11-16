//1. Melakukan Looping Menggunakan While//
console.log("LOOPING PERTAMA");
var i = 1;
while (i < 20) {
  i++;
  console.log(i + "- I love coding");
}
console.log("LOOPING KEDUA");
var j = 22;
while (j > 2) {
  j -= 2;
  console.log(j + " - I will become fullstack developer");
}

//2. Melakukan Looping Menggunakan For//
console.log("LOOPING PERTAMA");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "- I love coding");
}
console.log("LOOPING KEDUA");
for (var i = 20; i > 0; i -= 2) {
  console.log(i + " - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap//
for (var loop = 1; loop <= 100; loop++) {
  if (loop % 2 === 0) console.log("GENAP");
  else console.log("GANJIL");
}

for (var loop = 1; loop <= 100; loop += 2) {
  if (loop % 3 === 0) console.log(loop + " KELIPATAN " + 3);
}
for (var loop = 1; loop <= 100; loop += 5) {
  if (loop % 6 === 0) console.log(loop + " KELIPATAN " + 6);
  else console.log('""');
}
for (var loop = 1; loop <= 100; loop += 9) {
  if (loop % 10 === 0) console.log(loop + " KELIPATAN " + 10);
  else console.log('""');
}
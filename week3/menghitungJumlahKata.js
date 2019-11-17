// function hitungJumlahKata(kalimat) {
//   let a = kalimat.split(" ");
//   return a.length;
// }
const hitungJumlahKata = kalimat => {
  let a = kalimat.split(" ");
  let result = [];
  for (let i = 0; i < a.length; i++) if (a[i] !== "") result.push(a[i]);
  return result.length;
};
// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

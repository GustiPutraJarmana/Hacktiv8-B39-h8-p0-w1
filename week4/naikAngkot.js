function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  if (!arrPenumpang.length) return [];
  let result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let biaya =
      (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) *
      2000;
    let data = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: biaya
    };
    result.push(data);
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"]
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

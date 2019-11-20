function totalDigitRekursif(angka) {
  let str = angka.toString();
  let last = Number(str[str.length - 1]);
  if (!angka) {
    return 0;
  } else {
    return (last += totalDigitRekursif(str.slice(0, -1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

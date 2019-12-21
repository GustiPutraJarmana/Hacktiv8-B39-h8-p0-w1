function angkaPrima(angka) {
  let flag = true;
  if (angka < 2) {
    flag = false;
  } else {
    for (let i = 2; i < angka; i++) angka % i !== 0 ? flag : (flag = false);
  }
  return flag;
}

// TEST CASES
console.log(angkaPrima(2)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
function rangePrimeNumber(start, finish) {
  let i = 2;
  let result = [];
  while (result.length <= finish) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      result.push(i);
    } else {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        result.push(i);
      }
    }
    i++;
  }
  let output = [];
  for (let i = start - 1; i < result.length - 1; i++) {
    output.push(result[i]);
  }
  return output;
}
console.log(rangePrimeNumber(5, 10));
// output
// [11,13,17,19,23,29]
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

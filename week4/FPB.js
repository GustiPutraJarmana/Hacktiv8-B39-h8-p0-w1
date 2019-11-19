function fpb(angka1, angka2) {
  let a = [];
  let b = [];
  let temp = [];
  for (let i = 0; i < angka1; i++) {
    if (angka1 % i === 0) a.push(i);
  }
  for (let i = 0; i < angka2; i++) {
    if (angka2 % i === 0) b.push(i);
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) temp.push(b[j]);
    }
  }
  let result = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > result) {
      result = temp[i];
    }
  }
  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

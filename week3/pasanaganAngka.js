function pasanganTerbesar(num) {
  let strNum = String(num).split("");
  let temp = [];
  for (let i = 0; i < strNum.length - 1; i++) {
    temp[i] = strNum[i] + strNum[i + 1];
  }
  let a = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > a) a = temp[i];
  }
  return a;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

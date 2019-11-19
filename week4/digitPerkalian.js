function digitPerkalianMinimum(angka) {
  let a = [];
  for (let i = 0; i <= angka; i++) {
    for (let j = 0; j <= angka; j++) {
      if (i * j === angka) a.push(i.toString() + j.toString());
    }
  }
  let result = a[0];
  for (let i = 0; i < a.length / 2; i++) {
    if (Number(result) > Number(a[i])) result = a[i];
  }
  return result.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

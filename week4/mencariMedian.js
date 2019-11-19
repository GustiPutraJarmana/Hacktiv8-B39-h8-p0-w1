function cariMedian(arr) {
  let a = arr.length / 2;
  let result = 0;
  if (a % 1 !== 0) {
    let b = Math.floor(a);
    result = arr[b];
  } else {
    let c = Math.floor(a);
    for (let i = 0; i < arr.length; i++) {
      result = (arr[c] + arr[c - 1]) / 2;
    }
  }
  return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

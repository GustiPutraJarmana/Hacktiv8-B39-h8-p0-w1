function targetTerdekat(arr) {
  let a = arr.indexOf("x");
  let b = arr.indexOf("o");
  var c = arr.lastIndexOf("x");
  let result = 0;
  if (a === -1 || b === -1) return 0;
  result += a - b;
  if (result < 0) result = b - c;
  return result;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", "o", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

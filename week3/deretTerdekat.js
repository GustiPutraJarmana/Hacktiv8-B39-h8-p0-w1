function targetTerdekat(arr) {
  let output = arr.length;
  let posisiO = arr.indexOf("o");
  if (arr.indexOf("x") === -1) return 0;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "x") {
        let selisihOX = Math.abs(i - posisiO);
        if (selisihOX < output) output = selisihOX;
      }
    }
  }
  return output;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

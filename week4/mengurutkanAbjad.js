function urutkanAbjad(str) {
  let alphabeth = "0abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < alphabeth.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (alphabeth[i] === str[j]) result += alphabeth[i];
    }
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'

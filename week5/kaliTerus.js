function kaliTerusRekursif(angka) {
  let str = angka.toString();
  if (str.length === 1) {
    return str;
  } else {
    let a = 1;
    for (let i = 0; i < str.length; i++) {
      a *= Number(str[i]);
    }
    return kaliTerusRekursif(a)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6

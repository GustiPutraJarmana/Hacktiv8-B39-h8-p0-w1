function changeVocals(str) {
  let alphabeth = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let a = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === "a" ||
    str[i] === "i" ||
    str[i] === "u" ||
    str[i] === "e" ||
    str[i] === "o" ||
    str[i] === "A" ||
    str[i] === "I" ||
    str[i] === "U" ||
    str[i] === "E" ||
    str[i] === "O"
      ? (a += alphabeth[alphabeth.indexOf(str[i]) + 1])
      : (a += str[i]);
  }
  return a;
}

function reverseWord(str) {
  let a = "";
  for (let i = str.length - 1; i >= 0; i--) {
    a += str[i];
  }
  return a;
}

function setLowerUpperCase(str) {
  let a = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toLowerCase()
      ? (a += str[i].toUpperCase())
      : (a += str[i].toLowerCase());
  }
  return a;
}

function removeSpaces(str) {
  let a = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") a += str[i];
  }
  return a;
}

function passwordGenerator(name) {
  let sort = changeVocals(name);
  let reverse = reverseWord(sort);
  let UpperLower = setLowerUpperCase(reverse);
  let space = removeSpaces(UpperLower);
  return space;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

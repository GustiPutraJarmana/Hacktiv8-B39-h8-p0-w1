function palindrome(kata) {
  console.log(kata.length);
  
  let flag = true;
  for (let i = 0; i < kata.length; i++) {
    kata[i] === kata[kata.length - i - 1] ? flag : (flag = false);
  }
  return flag;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

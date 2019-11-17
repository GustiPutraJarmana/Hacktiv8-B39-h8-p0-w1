function angkaPalindrome(num) {
  let flag = true;
  while (flag) {
    num++;
    let number = Number(
      String(num)
        .split("")
        .reverse()
        .join("")
    );
    num === number ? (flag = false) : flag;
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181

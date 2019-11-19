function ubahHuruf(kata) {
  let alphabeth = "0abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < alphabeth.length - 1; j++) {
      if (kata[i] === alphabeth[j]) result += alphabeth[j + 1];
    }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

function sorting(arrNumber) {
  for (let i = 0; i < arrNumber.length; ) {
    if (arrNumber[i + 1] > arrNumber[i]) {
      let temp = arrNumber[i];
      arrNumber[i] = arrNumber[i + 1];
      arrNumber[i + 1] = temp;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  let listSort = sorting(arrNumber);
  if (!listSort.length) return '""'
  let a = 0;
  for (let i = 0; i < listSort.length; i++) {
    if (listSort[0] === listSort[i]) a++;
  }
  return `angka paling besar adalah ${listSort[0]} dan jumlah kemunculan sebanyak ${a} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  let listSort = sorting(arrNumber);
  let countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

  console.log(mostFrequentLargestNumbers([]));
''

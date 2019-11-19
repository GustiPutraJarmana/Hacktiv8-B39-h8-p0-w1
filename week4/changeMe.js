function changeMe(arr) {
  if (!arr.length) console.log('""');
  for (let i = 0; i < arr.length; i++) {
    let result = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 0
    };
    !arr[i][3] || arr[i][3] > new Date().getFullYear()
      ? (result.age = "Invalid Birth date")
      : (result.age = new Date().getFullYear() - arr[i][3]);
    console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}`);
    console.log(result);
  }
}
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"]
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

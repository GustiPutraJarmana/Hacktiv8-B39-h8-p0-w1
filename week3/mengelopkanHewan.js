function groupAnimals(animals) {
  animals.sort();
  let firstW = animals[0][0];

  let result = [];
  let temp = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i][0] === firstW) {
      temp.push(animals[i]);
    } else {
      result.push(temp);
      temp = [];
      firstW = animals[i][0];
      temp.push(animals[i]);
    }
    if (i === animals.length - 1) {
      result.push(temp);
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

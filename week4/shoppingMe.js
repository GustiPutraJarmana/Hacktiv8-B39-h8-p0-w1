function shoppingTime(memberId, money) {
  if ((!memberId && money) || (!memberId && !money))
    return "Mohom maaf, toko X hanya berlaku untuk member saja";
  else if (memberId && money < 50000) return "Mohon maaf, uang tidak cukup"; // perlu d isi pembanding
  let item = [
    ["Sepatu Stacattu", 1500000],
    ["Baju Zoro", 500000],
    ["Baju H&N", 250000],
    ["Sweater Uniklooh", 175000],
    ["Casing Handphone", 50000]
  ];
  let data;
  let listItem = [];
  let firstMoney = money;
  for (let i = 0; i < item.length; i++) {
    if (money >= item[i][1]) {
      money -= item[i][1];
      listItem.push(item[i][0]);
    }
    data = {
      memberId: memberId,
      money: firstMoney,
      listPurchased: listItem,
      changeMoney: money
    };
  }
  return data;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

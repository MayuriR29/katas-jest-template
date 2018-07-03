const shareExpenses = expenses => {
  let billSplit = {};
  let people = Object.keys(expenses);
  let spendings = people.map(person => expenses[person]);
  let sum = spendings.reduce((acc, curr) => acc + curr);

  for (var person in expenses) {
    const average = sum / spendings.length;
    let amountOwed = expenses[person] - average;
    billSplit[person] = Number(amountOwed.toFixed(2));
  }
  return billSplit;
};

// const shareExpenses = expenses => {
//   let sum = 0,
//    length = 0;
//   let billSplit = {};
//   let newArr = Object.entries(expenses);
//   console.log('neArr -->',newArr)
//   newArr.forEach(([key, value]) => {
//     length++;
//     sum += value;
//   });
//   for (var i in expenses) {
//     billSplit[i] = expenses[i] - sum / length;
//   }
//   return billSplit;
// };

module.exports = shareExpenses;

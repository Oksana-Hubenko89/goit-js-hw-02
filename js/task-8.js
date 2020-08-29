'use strict';
function reduceArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  // Write code under this line

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5

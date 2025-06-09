// Write a function that returns the number of negative numbers in an array

function countNegativeNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1; //count++
    }
  }

  return count;
}

console.log(countNegativeNumbers([-1, 3, -10, 2, -90])); // 3
console.log(countNegativeNumbers([1, 3, 10, 2, 90])); // 0
console.log(countNegativeNumbers([-1, -3, -10, -2, -90])); // 5

// Write a function that returns the largest number in an array

function findLargestNumber(arr) {
  let largestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

console.log(findLargestNumber([10, 4, 5, 7, 80, 99]));
console.log(findLargestNumber([10, 4, 5, 7, 80, -6, -10]));
console.log(findLargestNumber([-3, -1, -10, -20, -6, -10]));

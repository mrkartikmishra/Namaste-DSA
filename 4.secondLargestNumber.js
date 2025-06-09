// write a function which returns the second largest number in an array

function findSecondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 5, 6]));
console.log(findSecondLargestNumber([1, 2, 3, 4, 5, 6, 10, 10]));
console.log(findSecondLargestNumber([10, 2, 30, 20, 5, 6]));
console.log(findSecondLargestNumber([-1, -2, -3, -40, -5, -60]));
console.log(findSecondLargestNumber([-1, -2, -3, -40, 5, 6]));

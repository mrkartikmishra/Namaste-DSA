// Search and element from an Array and return the index of that elemnet. Return -1 if rlrmrny not found in the array.

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }

  return -1;
}

console.log(searchElement([10, 3, 6, 4, 17, 29], 4)); // 3
console.log(searchElement([10, 3, 6, 4, 17, 29], 10)); // 0
console.log(searchElement([10, 3, 6, 4, 17, 29], 30)); // -1

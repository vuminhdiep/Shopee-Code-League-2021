/*
  Binary Search
 */

const arraySet = [2, 4, 7, 10, 32, 50, 62, 67]; //100

// using binary
function getIndexOfItem(item) {
  let minIndex = 0;
  let maxIndex = arraySet.length - 1;
  let pivot = Math.floor((minIndex + maxIndex) / 2);

  // while loop, condition if minIndex <= maxIndex
  while (minIndex <= maxIndex) {
    // if arraySet[pivot] is item, return the item
    if (arraySet[pivot] === item) {
      return pivot;
      // if arraySet[pivot] is less than item, max should be pivot - 1
    } else if (arraySet[pivot] > item) {
      maxIndex = pivot - 1;
    } // if arraySet[pivot] is less than item, max should be pivot + 1
    else {
      minIndex = pivot + 1;
    }
  }

  // if item not found, return -1;
  return -1;
}

console.log(getIndexOfItem(67)); // 7
console.log(getIndexOfItem(68)); // -1
console.log(getIndexOfItem(4)); // 1
console.log(getIndexOfItem(2)); // 0
console.log(getIndexOfItem(-65)); // -1
console.log(getIndexOfItem(32)); // 4

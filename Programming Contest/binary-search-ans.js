/*
  Binary Search
 */

const arraySet = [2,4,7,10,32,50,62,67]; //100

// using binary
function getIndexOfItem(item) {
  let min = 0; 
  let max = arraySet.length-1;
  let pivot;

  // when item = 67
  // 2nd iteration: min = 4, max = 7, pivot = 5
  // 3rd iteration: min = 5, max = 7, pivot = 6
  // 4th iteration: min = 7, max = 7, pivot = 7
  // when item 68: at while loop point of exit:  min = 8, max = 7, pivot = 7

  // while loop should run as long as min is less than or equal to max
  while(min <= max) {
    pivot = Math.floor((min+max)/2);
    // if arraySet[pivot] equals to value, then return pivot value
    if (arraySet[pivot] === item) {
      return pivot;
    } else if (arraySet[pivot] > item) {
      // if arrayset[pivot] is more than item, max index should decrease as pivot-1
      max = pivot-1;
    } else { // < less than item
      // if arrayset[pivot] is less than item, min index should increase as pivot+1
      min = pivot+1;
    }
  }
  // return the default -1
  return -1;
}

console.log(getIndexOfItem(67)); // 7
console.log(getIndexOfItem(68)); // -1
console.log(getIndexOfItem(4)); // 1
console.log(getIndexOfItem(2)); // 0
console.log(getIndexOfItem(-65)); // -1
console.log(getIndexOfItem(32)); // 4
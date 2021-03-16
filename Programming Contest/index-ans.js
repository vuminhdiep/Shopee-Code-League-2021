/*
  Linear Search
 */

const arraySet = [2,4,7,10,67,32,50,62];

function getIndexOfItem(item) {
  // from index 0, going to check every item
  for (let i=0; i< arraySet.length; i++) {
    // if value at arraySet[i] matches item, return i
    if (arraySet[i] === item) {
      return i;
    }
  }
  // if the item does not exist in the arraySet, return -1
  return -1;
}

console.log(getIndexOfItem(67)); // 4
console.log(getIndexOfItem(68)); // -1

function getMinAndMax(arraySet) {
  let min = arraySet[0]; 
  let max = arraySet[0];

  for (let i=1; i < arraySet.length; i++) {
    // if value at index is smaller than min, then assign this value to min variable
    if (arraySet[i] < min) {
      min = arraySet[i];
    }

    // if value at index is larger than max, then assign this value to max variable
    if (arraySet[i] > max) {
      max = arraySet[i];
    }
  }

  console.log(`Min: ${min}, Max: ${max}`);
}

getMinAndMax([1,2,3,4,0,-5,-9]); // Min: -9, Max: 4
getMinAndMax([56,78,0,1,99,-99]); // Min: -99, Max: 99

function getMinAndMaxSum(arraySet) {
  let min, max, sum = 0;

  for (let i=0; i < arraySet.length; i++) {
    sum += arraySet[i];
  }
  
  min = sum-arraySet[0];
  max = sum-arraySet[0];

  for (let i=1; i < arraySet.length; i++) {
    const diff = sum - arraySet[i];
    if (diff < min) {
       min = diff;
    }

    if (diff > max) {
       max = diff;
    }
  }

  console.log(`Min Sum: ${min}, Max Sum: ${max}`);
}

getMinAndMaxSum([1,2,3,4,5]); // Min Sum: 10, Max Sum: 14

/*
[2,3,4,5] => 14
[1,2,3,4] => 10
[1,3,4,5] => 13
[1,2,3,5] => 11
[1,2,3,4] => 10
*/
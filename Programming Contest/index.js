/*
  Linear Search
 */

const arraySet = [2, 4, 7, 10, 67, 32, 50, 62];

function getIndexOfItem(set, item) {
  //   //loop through each value in set
  for (let i = 0; i < set.length; i++) {
    //     // if item found, return index of item
    if (set[i] === item) {
      return i;
    }
  }

  //   //if item does not exist in set, return -1
  return -1;
}

console.log(getIndexOfItem(arraySet, 67)); // 4
console.log(getIndexOfItem(arraySet, 68)); // -1

function getMinAndMax(arraySet) {
  // have a variable to record min value
  let min = arra;
  // have a variable to record max value

  // loop through the array
  for (let i = 1; i < setInterval.length; i++) {
    // check min & max variable against the value in array for this iteration
    if (min > arraySet[i]) {
      min = arraySet[i];
    }
    if (max < arraySet[i]) {
      max = arraySet[i];
    }
  }

  console.log(`Min: ${min}, Max: ${max}`);
  console.log('Min: '+min+', Max: '+max);
}

getMinAndMax([1, 2, 3, 4, 0, -5, -9]); // Min: -9, Max: 4
getMinAndMax([56, 78, 0, 1, 99, -99]); // Min: -99, Max: 99

function getMinAndMaxSum(arraySet) {

}

getMinAndMaxSum([1,2,3,4,5]); // Min Sum: 10, Max Sum: 14

/*
[2,3,4,5] => 14
[1,2,3,4] => 10
[1,3,4,5] => 13
[1,2,3,5] => 11
[1,2,3,4] => 10
*/

/*
Bubble Sort Algorithm
*/

let arraySet = [5,8,10,1,0,34,10,-3]; // [-3,0,1,5,8,10,10,34] 

function bubbleSort(array) {
  let count = 0;
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<array.length-1-i; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
      count++;
    }
    count++;
  }
  console.log(`Array: [${array}] bubble sorted in ${count} iterations`);
}

bubbleSort(arraySet);

function insertionSort(array) {
  let count = 0;
  for (let i=0; i<array.length; i++) {
    let j = i;
    const temp = array[i];
    while (j > 0 && temp < array[j-1]) {
      array[j] = array[j-1];
      array[j-1] = temp;
      j -= 1;
      count++;
    }
    array[j] = temp;
    count++;
  } 
  console.log(`Array: [${array}] insertion sorted in ${count} iterations`);
}

insertionSort(arraySet);

arraySet = [5,8,10,1,0,34,10,-3]; // [-3,0,1,5,8,10,10,34] 
let mergeCount = 0;

function mergeSort(left, right) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(left[j]);
      j++;
    }
    mergeCount++;
  }
  sortedArr = sortedArr.concat(left.slice(i)).concat(right.slice(j));
  console.log(sortedArr)
  return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}
function merge(array) {
  if (array.length < 2) {
    return array;
  }
  const midPoint = Math.floor(array.length/2);
  const leftArray = array.slice(0, midPoint);
  const rightArray = array.slice(midPoint);
  return mergeSort(merge(leftArray), merge(rightArray));
}
const mergeSortedArr = merge(arraySet);
console.log(`Array: [${mergeSortedArr}] merge sorted in ${mergeCount} iterations`);

arraySet = [5,8,10,1,0,34,10,-3]; // [-3,0,1,5,8,10,10,34] 
let quickCount = 0;
function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
        quickCount++;
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

const quickSortedArr = quickSortRecursive(arraySet, 0, arraySet.length-1);
console.log(`Array: [${arraySet}] quick sorted in ${quickCount} iterations`);
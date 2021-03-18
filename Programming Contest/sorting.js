/*
Bubble Sort Algorithm
*/

// function bubbleSort(array) {
//   // loop through each index in array
//   // outerloop
//   for (let i=0; i<array.length; i++) {
//     // inner loop
//     for (let j=0; j<array.length-1-i; j++) {
//       // if current index value is more than next index value, swap
//       if (array[j] > array[j+1]) {
//         const temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([5, 8, 10, 1, 0, 34, 10, -3])); 
// // [-3,0,1,5,8,10,10,34] 

/*
Insertion Sort Algorithm
*/
function insertionSort(array) {
    //outerloop
    for (let i=0; i < array.length; i++) { // i = 3
      // temp variable array[i], variable j
      let j = i; // 3
      const temp = array[j]; // 1
        // while  j > 0 and current index value is less than previous index value, ensure swap for current index
        while(j > 0 && temp < array[j-1]) { // 1
          array[j] = array[j-1];
          j--;
        }
  
      //assign smallest value of j index to temp
      
    }
    //return array;
  }
  
  console.log(insertionSort([5,8,10,1,0,34,10,-3]));
  // [-3,0,1,5,8,10,10,34] 
  
  /*
  Merge Sort Algorithm
  */
  
  function mergeSort(left, right) {
    // get a empty array for sorting purposes
    // starting left index variable
    // starting right index variable
    
    // while left index is less than left array length &&
    // right index is less than right array length 
       
        // if left index value is lesser than right index, push left index value and increase left index 
        
        // else push right index value and increase right index 
  
    // combine sorted array with left over of left array and right array
    // return sortedArr;
  }
  
  function merge(array) {
    // if less array less than 2, return array
    
    // calculate midpoint
    // get left array split
    // get right array split
    // return merged array of left and right
  }
  console.log(merge([5,8,10,1,0,34,10,-3])); // [-3,0,1,5,8,10,10,34]
  
  /*
  Quick Sort Algorithm
  */
  arraySet = [5, 8, 10, 1, 0, 34, 9, -3]; // [-3,0,1,5,8,10,10,34] 
  function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
  
    const index = partition(arr, start, end);
  
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
  }
  
  // will return the pivot index checked for new sub array
  function partition(arr, start, end) {
    // Take the first index as pivot
    const pivotValue = arr[start];
    let pivotIndex = start+1;
    for (let i = pivotIndex; i <= end; i++) {
      if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
      }
    }
    [arr[start], arr[pivotIndex-1]] = [arr[pivotIndex-1], arr[start]];
    return pivotIndex;
  };
  
  quickSort(arraySet, 0, arraySet.length - 1);
  // console.log(`Array: [${arraySet}]`);
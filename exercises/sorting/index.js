// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // worst case runtime: n^2
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap j and j+1
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  // worst case runtime: n^2
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // assume i is the min of the array
    for (let j = i+1; j < arr.length; j++) {
      // iterate all the elements after i and try to find an element smaller than i
      if (arr[j] < arr[indexOfMin]) {
        // if smaller element found, record/update indexOfMin
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) { // if i is not actually the min of the array (proved wrong), swap 
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  // worst case runtime: n*Log(n)
}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

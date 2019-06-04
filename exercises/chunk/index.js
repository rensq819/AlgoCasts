// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/** Solution 1 */
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1]; // fetch the last array of chunkced

//     if (!last || last.length === size) { // if last array doesn't exist or last array lengh is equal to size
//       chunked.push([element]); // chunked create new array
//     } else {
//       last.push(element); // last array push new element
//     }
//   }
//   return chunked; // return chucnked
// }

/** Solution 2 */
function chunk(array, size) {
  const chunked = [];
  let start = 0;

  while (start < array.length) {
    chunked.push(array.slice(start, start + size)); // slice return a new array but does NOT change the original array
    start += size;
  }

  return chunked;
}

module.exports = chunk;

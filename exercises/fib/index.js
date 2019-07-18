// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/** Solution 1: linear runtime */
// function fib(n) {
//   const result = [0, 1]; // because 0 1 are always there

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result[i] = a + b;
//   }
//   return result[n];
// }

/** Solution 2: recursive solution */
// runtime complexity is a big issue, exponancial time
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

/** Solution 3: Memoization process, remember the previous result with same input */
// improved recursion method.
function memoize(fn) {
  const cache = {};

  return function(...args) { // ...args means whatever is passed in for the function call, record them in the args array
    if(cache[args]){ // check if there is same arg called before and saved in the hashmap before
      return cache[args];
    }

    const result = fn.apply(this, args); // fn here is the slowFib
    cache[args] = result; // store the new args and result here in the hashmap

    return result;
  }; 
}
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib); // take slowFib and pass the function to memoize, which returns a new function, which becaomes fib

module.exports = fib;

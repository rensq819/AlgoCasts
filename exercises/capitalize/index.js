// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/** Solution 1 */
// function capitalize(str) {
//   let arr = [];
//   for (let word of str.split(' ')) { // split sentence by space, into words array, iterate the array
//     word = word[0].toUpperCase().concat(word.slice(1)); // take the first letter and capitalize, concat the capitalized letter back with the rest of the word
//     arr.push(word); // pushed the new word into array
//   }
//   return arr.join(' '); // join back the array with space.
// }

/** Solution 2 */
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/** Solution 1 */
// function reverse(str) {
//   const arr = str.split(''); // take string to array
//   arr.reverse(); // reverse the array
//   return arr.join(''); // join the letters into string
// }

/** Improved Solution 1 */
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

/** Solution 2 */
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

/** Solution 3 */
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

/** Improved Solution 3 */
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

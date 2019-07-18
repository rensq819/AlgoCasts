// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/** Solution 1 */
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   let count = 0;
//   for(let char of str.toLowerCase()){
//     if(vowels.includes(char)){
//       count++;
//     }
//   }

//   return count;
// }

/** Solution 2 */
// use regex 
function vowels(str) {
  // check for anything that's inside "[]" the bracket, g makes sure that we don't stop for only the first match find, i for case insensitive
  const matches = str.match(/[aeiou]/gi); // see if some char is included in the string. 
  // matches will be either an array or null
  return matches ? matches.length : 0;
}

module.exports = vowels;

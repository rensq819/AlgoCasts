// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/** Solution 1 */
// function anagrams(stringA, stringB) {
//   const mapA = buildMap(stringA); // use the hashmap helper to reduce duplicates
//   const mapB = buildMap(stringB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) { // if keys length are not equal, return false immedietaly
//     return false;
//   } else { // if keys length are same, compare values
//     for (let char in mapA) {
//       if (!mapB[char] || mapB[char] !== mapA[char]) { // if value doesn't exist on one or is not the same, return false
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function buildMap(str) {
//   const map = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }

//   return map;
// }

/** Solution 2 */ /** clean out punctuation and space, all lower case, split into array and sort, join back to string */
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) { // for ARRAY, STRING, use for (let ... OF ...)
    // obj[char] ? obj[char]++ : (obj[char] = 1);
    obj[char] = obj[char] + 1 || 1; // if obj[char] is undefined, assign 1
  }

  for (let char in obj) { // for OBJECT, use for (let ... IN ...)
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

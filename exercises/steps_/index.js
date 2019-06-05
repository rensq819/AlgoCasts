// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/** Solution 1 */
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

/** Solution 2 */ /** recursive */
function steps(n, row = 0, stair = '') {
  // base case: to decide that we have nothing to do
  if (n === row) {
    return;
  }

  // if we reached the end of the row, print stair
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1); // use default empty stair
    return;
  }

  // the case that we are assembling the stair
  /** option 1
  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  // steps(n, row, stair + add);
  */

  /** option 2 */
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

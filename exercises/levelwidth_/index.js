// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [root, '.'];
  let result = [0];
  while (arr.filter(e => e !== '.').length > 0) {
    const node = arr.shift();
    if(node === '.'){
      result.push(0);
      arr.push('.')
    } else {
      arr.push(...node.children);
      result[result.length-1]++; // increment the last counter by 1
    }
  }

  return result;
}

module.exports = levelWidth;

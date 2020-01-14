// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // use slow-fast solution because fast is twice the speed as slow, so whenever the fast stops, slow is at the midpoint of the list
  let slow, fast;
  slow = list.head;

  if (slow) {
    // if list has more than 1 node
    fast = list.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  } else {
    return null;
  }
}

module.exports = midpoint;

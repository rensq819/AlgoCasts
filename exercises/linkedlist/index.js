// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    // check if list is empty
    if (this.head) {
      // check if list has only 1 node
      if (this.head.next) {
        let currentNode = this.head;
        let nextNode = this.head.next;
        while (nextNode.next) {
          // if next node's next is not empty, keep on iterating.
          currentNode = nextNode;
          nextNode = nextNode.next;
        }
        currentNode.next = null;
      } else {
        this.head = null;
      }
    } else {
      this.head = null;
    }
  }

  insertLast(data) {
    let lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      } else {
        count++;
        node = node.next;
      }
    }
    return null;
  }
}

module.exports = { Node, LinkedList };

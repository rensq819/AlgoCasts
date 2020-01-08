// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        // add to the start of the queue. e.g add 1 to [2, 3, 4] => [1, 2, 3, 4]
        this.data.unshift(record);
    }

    remove() {
        // remove the last record of the queue
        return this.data.pop();
    }
}

module.exports = Queue;

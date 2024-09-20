// Note this is not Optimal:
//We are sorting which is O(N * Log(N))

class PriorityQueue {
    constructor () {
        this.values = [];
    }
    enqueue (value, priority) {
        this.values.push({ value, priority });
        this.sort()
    }
    dequeue () {
        return this.values.shift()
    }
    sort () {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

const myQueue = new PriorityQueue();
myQueue.enqueue("A", 1);
myQueue.enqueue("C", 3);
myQueue.enqueue("B", 2);
myQueue.enqueue("D", 4)
myQueue.dequeue();
myQueue.dequeue();
// console.log(myQueue.values);

module.exports = { PriorityQueue }

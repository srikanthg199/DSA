class Node {
    constructor (value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.values = []
    }
    enqueue (value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp()
    }
    bubbleUp () {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    };
    dequeue () {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return min;
    };
    sinkDown () {
        const element = this.values[0];
        const length = this.values.length;
        let index = 0;
        while (true) {
            let leftValueIndex = index * 2 + 1;
            let rightValueIndex = index * 2 + 2;
            let leftValue, rightValue;
            let swap = null;
            if (leftValueIndex < length) {
                leftValue = this.values[leftValueIndex]
                if (leftValue.priority < element.priority) {
                    swap = leftValueIndex;
                }
            }
            if (rightValueIndex < length) {
                rightValue = this.values[rightValueIndex]
                if (
                    (swap === null && rightValue.priority < element.priority) ||
                    (swap !== null || leftValue.priority < rightValue.priority)) {
                    swap = rightValueIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const priorityQueue_Hospital = new PriorityQueue()
priorityQueue_Hospital.enqueue("normal cold", 4);
priorityQueue_Hospital.enqueue('Heavy Fever', 2);
priorityQueue_Hospital.enqueue("Accident", 1);
priorityQueue_Hospital.enqueue("Cancer", 3);
priorityQueue_Hospital.dequeue();
console.log(priorityQueue_Hospital.values);

module.exports = { PriorityQueue }

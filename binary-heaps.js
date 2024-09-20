class MaxBinaryHeap {
    constructor () {
        // this.values = [41, 39, 33, 18, 27, 12]
        this.values = []
    }
    insert (value) {
        // Adding value at end
        this.values.push(value);
        // Bubble up added value.
        this.bubbleUp();
    }
    bubbleUp () {
        let index = this.values.length - 1;
        let value = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (value <= parent) break;
            this.values[parentIndex] = value;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    removeMax () {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown () {
        const length = this.values.length;
        const element = this.values[0]
        let index = 0;
        while (true) {
            // Get the right and left indexes
            let leftValueIndex = 2 * index + 1;
            let rightValueIndex = 2 * index + 2;
            let swap = null;
            let leftValue, rightValue;
            if (leftValueIndex < length) {
                leftValue = this.values[leftValueIndex];
                if (leftValue > element) {
                    swap = leftValueIndex;
                }
            }
            if (rightValueIndex < length) {
                rightValue = this.values[rightValueIndex];
                if (
                    (swap === null && rightValue > element) ||
                    (swap !== null && rightValue > leftValue)) {
                    swap = rightValueIndex
                }
            }
            // Base case: no swap needed
            if (swap === null) break;
            // Swap the values
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}
const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55); //[55, 39, 41, 18,27, 12, 33]
maxBinaryHeap.removeMax() //[ 41, 39, 33, 18, 27, 12 ]
maxBinaryHeap.removeMax() //[ 39, 27, 33, 18, 12 ]
console.log(maxBinaryHeap.values);


class MinBinaryHeap {
    constructor () {
        // this.values = [41, 39, 33, 18, 27, 12]
        this.values = []
    }
    insert (value) {
        // Adding value at end
        this.values.push(value);
        // Bubble up added value.
        this.bubbleUp();
    }
    bubbleUp () {
        let index = this.values.length - 1;
        let value = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (value >= parent) break;
            this.values[parentIndex] = value;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    removeMin () {
        const minBinaryHeap = this.values[0];
        const end = this.values.pop();
        // If array not empty assign the last element to first. and sinkDown value to correct place.
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return minBinaryHeap;
    }
    sinkDown () {
        const length = this.values.length;
        const element = this.values[0];
        let index = 0;
        while (true) {
            // Get the right and left indexes
            let leftValueIndex = 2 * index + 1;
            let rightValueIndex = 2 * index + 2;
            let swap = null;
            let leftValue, rightValue;
            if (leftValueIndex < length) {
                leftValue = this.values[leftValueIndex];
                if (leftValue < element) {
                    swap = leftValueIndex;
                }
            }
            if (rightValueIndex < length) {
                rightValue = this.values[rightValueIndex];
                if (
                    (swap === null && rightValue < element) ||
                    (swap !== null && rightValue < leftValue)) {
                    swap = rightValueIndex
                }
            }
            // Base case: no swap needed
            if (swap === null) break;
            // Swap the values
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}
const minBinaryHeap = new MinBinaryHeap()
minBinaryHeap.insert(41);
minBinaryHeap.insert(39);
minBinaryHeap.insert(33);
minBinaryHeap.insert(18);
minBinaryHeap.insert(27);
minBinaryHeap.insert(12);
minBinaryHeap.insert(1); // [1, 27, 12, 41,33, 39, 18]
minBinaryHeap.removeMin(); // [ 12, 27, 18, 41, 33, 39 ]
minBinaryHeap.removeMin(); // [ 18, 27, 39, 41, 33 ]
console.log(minBinaryHeap.values);

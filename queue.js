class Node {
    constructor (value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek () {
        return this.first;
    }
    enqueue (value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return this;
    }
    dequeue () {
        if (!this.first) {
            return null
        }
        const firstNode = this.first;
        if (this.first === this.last) {
            this.last = null
        };
        this.first = this.first.next;
        this.length--;
        return firstNode.value;
    }
    printQueue () {
        let currentNode = this.first;
        const queueList = []
        while (currentNode !== null) {
            queueList.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(queueList);
    }
}

const queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(2)
// // queue.dequeue()
// // queue.dequeue()
// // console.log(queue.peek())
// queue.printQueue()
// console.log(queue);

//  Implement queue using stacks. S.C => O(2n); T.C => O(1) amortized.
// class MyQueue {
//     constructor () {
//         this.stack1 = [];
//         this.stack2 = [];
//     }
//     push (value) {
//         this.stack1.push(value);
//     }
//     pop () {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
//     peek () {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack2.length - 1]
//     }
//     empty () {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }
// }

// const queue = new Queue();
// queue.push(1)
// queue.push(2)
// queue.push(3)
// console.log(queue.peek())
// queue.pop()
// queue.pop()
// queue.pop()

// console.log(queue.empty());
// console.log(queue.peek())
// console.log(queue);

module.exports = { Queue }
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}
//Implementing Stack using Liked List
// class Stack {
//     constructor () {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     peek () {
//         return this.top()
//     }
//     push (value) {
//         const newNode = new Node(value);
//         if (this.length === 0) {
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const currentTop = this.top;
//             this.top = newNode;
//             this.top.next = currentTop;
//         }
//         this.length++;
//         return this;
//     }
//     pop () {
//         if (!this.top) {
//             return null;
//         }
//         if (stack.top === this.bottom) {
//             this.bottom = null
//         }
//         const currentTop = this.top;
//         this.top = this.top.next;
//         this.length--
//         return currentTop;
//     }
//     printStack () {
//         const stackArray = []
//         let currentNode = this.top;
//         while (currentNode !== null) {
//             stackArray.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         console.log(stackArray);
//     }
//     isEmpty () {
//         return this.length === 0;
//     }
// }

//Implementing Stack using an Array
class Stack {
    constructor () {
        this.array = []
    }
    peek () {
        console.log(this.array[this.array.length - 1])
    }
    push (value) {
        this.array.push(value)
        return this;
    }
    pop () {
        const removedItem = this.array.pop()
        return removedItem;
    }
    isEmpty () {
        return !this.array.length;
    }
    printStack () {
        console.log(this.array);
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.peek()
stack.printStack()
console.log(stack.isEmpty());

console.log(/s/, stack);

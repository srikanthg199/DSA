// 1 => pre  10 => 20 => 30 
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
// remove(index) {
//     // If index is out of bounds
//     if (index >= this.length || index < 0) {
//         console.log("Index out of bounds");
//         return this;
//     }

//     // Handle removing the head
//     if (index === 0) {
//         this.head = this.head.next;
//         if (this.head) {
//             this.head.prev = null;
//         } else {
//             this.tail = null; // The list is now empty
//         }
//     } else {
//         const leader = this.traverseToIndex(index - 1);
//         const unwantedNode = leader.next;
//         const follower = unwantedNode.next;

//         leader.next = follower;

//         if (follower) {
//             follower.prev = leader;
//         } else {
//             this.tail = leader; // Update tail if the last node is removed
//         }
//     }

//     this.length--;
//     return this;
// }

class DoubleLinkedList {
    constructor (value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append (value) {
        //Logic To append value to liked list 
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert (index, value) {
        if (index === 0) return this.prepend(value);
        if (index >= this.length) return this.append(value)
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++
        return this;
    }
    traverseToIndex (index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
    remove (index) {
        // If index is out of bounds
        if (index < 0 || index >= this.length) {
            console.log("Index out of bounds");
            return this;
        }
        // Removing the head
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // The list is now empty
            }
        }
        // Removing the tail
        else if (index === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        // Removing a middle node
        else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            const follower = unwantedNode.next;
            leader.next = follower;
            follower.prev = leader;
        }
        this.length--;
        return this;
    }
    printList () {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(1);
myLinkedList.insert(0, 99);
myLinkedList.insert(20, 55);
myLinkedList.remove(5)
myLinkedList.printList()
// console.log(myLinkedList);

// 1 => pre  10 => 20 => 30 
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append (value) {
        //Logic To append value to liked list 
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
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
    prepend (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert (index, value) {
        if (index === 0) return this.prepend(value);
        if (index >= this.length) return this.append(value)
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
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
        if (index === 0) {
            this.head = this.head.next;
            return this;
        }
        // If index is out of bounds
        if (index >= this.length) {
            console.log("Index out of bounds");
            return this;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        if (unwantedNode === this.tail) {
            this.tail = leader;
            this.tail.next = null;
        } else {
            leader.next = unwantedNode.next;
        }
        this.length--;
        return this;
    }
    reverse () {
        let prev = null;
        let curr = this.head;
        this.tail = this.head;
        let next = null;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
    };
    recursiveReverse (currentNode = this.head) {
        // Base case: if the list is empty or we reach the last node
        if (currentNode === null || currentNode.next === null) {
            // Update the head and tail when the reversal is complete
            this.tail = this.head;
            this.head = currentNode;
            return currentNode;
        }

        // Recursively reverse the rest of the list
        const newHead = this.recursiveReverse(currentNode.next);

        // Reverse the current node's next pointer
        // let front = currentNode.next;
        // front.next = currentNode;
        currentNode.next.next = currentNode;
        currentNode.next = null;

        return newHead;
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(1);
myLinkedList.insert(2, 100);
myLinkedList.insert(20, 99);
myLinkedList.remove(398)
// myLinkedList.reverse()
myLinkedList.printList()
myLinkedList.recursiveReverse()
myLinkedList.printList()
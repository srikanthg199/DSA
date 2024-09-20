//     9
//  4     20

const { Queue } = require("./queue");

//1  6  15  170
class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }
    insert (value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup (value) {
        if (!this.root) return null;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        };
        return false;
    };
    // TODO
    remove (value) { }
    //Breadth-First-Search(BFS)
    BFS () {
        let current = this.root;
        let data = [];
        let queue = new Queue()
        queue.enqueue(current)
        while (queue.length) {
            current = queue.dequeue();
            data.push(current.value);
            if (current.left) queue.enqueue(current.left);
            if (current.right) queue.enqueue(current.right);
        }
        return data;
    }
    rightSideView () {
        const data = [];
        if (!this.root) return data;
        let queue = [this.root];
        while (queue.length) {
            let levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift();
                if (i === levelSize - 1) data.push(current.value)
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }
        return data;
    }
    // In-Order => Left -> Root -> Right
    DFSInOrder () {
        const data = []
        function postOrderTraverse (node) {
            if (node.left) postOrderTraverse(node.left);
            data.push(node.value);
            if (node.right) postOrderTraverse(node.right);
        }
        postOrderTraverse(this.root);
        return data;
    }
    //Depth-First-Search(DFS) => (Pre-Order) => Root -> left -> right
    DFSPreOrder () {
        const data = []
        function preOrderTraverse (node) {  // Pass current node
            data.push(node.value);
            if (node.left) preOrderTraverse(node.left);
            if (node.right) preOrderTraverse(node.right);
        }
        preOrderTraverse(this.root);
        return data;
    };
    //Depth-First-Search(DFS) => (Pre-Order) => Left -> Right -> Root
    DFSPostOrder () {
        const data = []
        function postOrderTraverse (node) {
            if (node.left) postOrderTraverse(node.left);
            if (node.right) postOrderTraverse(node.right);
            data.push(node.value)
        }
        postOrderTraverse(this.root);
        return data;
    };
}

function traverse (node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//     9
//  4     20
//1  6  15  170
// console.log(tree);
// console.log(tree.lookup(123));
// console.log(tree.BFS());
// console.log(tree.rightSideView());

console.log(tree.DFSInOrder()); // [1, 4, 6, 9, 15, 20, 170]
console.log(tree.DFSPreOrder());  // [9, 4, 1, 6, 20, 15, 170]
console.log(tree.DFSPostOrder()); //[1, 6, 4, 15, 170, 20, 9]

console.log(JSON.stringify(traverse(tree.root)));
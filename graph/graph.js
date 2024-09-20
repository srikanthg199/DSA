// adjacencyList = {
//     'A': ['B', 'C'],
//     'B': ['A', 'D'],
//     'C': ['A', 'E'],
//     'D': ['B', 'E', 'F'],
//     'E': ['C', 'D', 'F'],
//     'F': ['D', 'E']
// }
// DFS → Stack or recursion.
// BFS → Queue.

class Graph {
    constructor () {
        this.adjacencyList = {}
    }
    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    // For undirected
    addEdge (vertex1, vertex2) {
        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            return "Invalid vertex"
        }
        //Add validation if require if vertex already has a edge.
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    };
    removeEdge (vertex1, vertex2) {
        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            return "Invalid vertex"
        };
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex (vertex) {
        if (!(vertex in this.adjacencyList)) {
            return "Invalid vertex"
        };
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        };
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive (start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs (vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor)
            });
        }
        dfs(start);
        console.log(result);
    }
    depthFirstIterative (start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        console.log(result);
    }
    breadthFirstSearch (start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        console.log(result);
    };

    showConnections () {
        const allNodes = Object.keys(this.adjacencyList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacencyList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "--> " + connections);
        }
    }
}

const graph = new Graph();
// graph.addVertex("Hyderabad");
// graph.addVertex("Kochi");
// graph.addVertex("Chennai");
// graph.addVertex("Mumbai");
// graph.addEdge("Hyderabad", "Kochi");
// graph.addEdge("Kochi", "Chennai");
// graph.addEdge("Kochi", "Mumbai");
// graph.addEdge("Chennai", "Mumbai");
// graph.addEdge("Hyderabad", "Mumbai");
// graph.removeEdge("Hyderabad", "Mumbai");
// graph.removeVertex("Kochi")
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph);
graph.depthFirstRecursive("A")
graph.depthFirstIterative("A")
graph.breadthFirstSearch("A")
graph.showConnections()


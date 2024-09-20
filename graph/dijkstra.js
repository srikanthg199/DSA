// const { PriorityQueue } = require("./simple-priority-queue");
const { PriorityQueue } = require("../priority-queue");
class WeightedGraph {
    constructor () {
        this.adjacencyList = {}
    };
    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };
    addEdge (vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    };

    Dijkstra (start, end) {
        const distances = {};
        const previous = {};
        const nodes = new PriorityQueue();
        let smallest;
        let path = []; // final shortest path to return at end
        // Buildup Initial state of all variables
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // As long as there is something to visit in Queue:
        while (nodes.values.length) {
            smallest = nodes.dequeue().value;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                };
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                // Loop over each neighbor of smallest vertex
                for (let neighbor of this.adjacencyList[smallest]) {
                    // Calculate new distance to neighbor node;
                    let newDistance = distances[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;
                    if (newDistance < distances[nextNeighbor]) {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = newDistance;
                        // Updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // Enqueue in priority queue with new Priority
                        nodes.enqueue(nextNeighbor, newDistance)
                    }
                }
            }
        }
        console.log(distances);
        console.log(path.concat(smallest).reverse(), `: => ${distances[end]} km`);
    };

    showConnections () {
        const allVertexes = Object.keys(this.adjacencyList);
        for (let node of allVertexes) {
            let nodeConnections = this.adjacencyList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += `${vertex.node}:${vertex.weight}` + " ";
            }
            console.log(node + "--> " + connections);
        }
    }
};

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.showConnections();
graph.Dijkstra("D", "B");


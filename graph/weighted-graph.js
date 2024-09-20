class WeightedGraph {
    constructor () {
        this.adjacencyList = {}
    };
    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge (vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
};

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("a");
weightedGraph.addVertex("b");
weightedGraph.addVertex("c");
weightedGraph.addEdge("a", "b", 10);
weightedGraph.addEdge("b", "c", 10);
weightedGraph.addEdge("c", "a", 15);
console.log(weightedGraph);
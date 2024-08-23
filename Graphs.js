// Graph implementation using an Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vert1, vert2) {
    if (this.adjacencyList[vert1]) this.adjacencyList[vert1].push(vert2);
    if (this.adjacencyList[vert2]) this.adjacencyList[vert2].push(vert1);
  }

  removeEdge(vert1, vert2) {
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
      (v) => v !== vert2
    );
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
      (v) => v !== vert1
    );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      const adjacentVertices = [...this.adjacencyList[vertex]];

      adjacentVertices.forEach((element) => {
        this.removeEdge(element, vertex);
      });

      delete this.adjacencyList[vertex];
    }
  }
}

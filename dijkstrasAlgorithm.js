
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstras(start, end) {
    // distances table
    let distances = {};
    Object.keys(this.adjacencyList).forEach((key) => {
      distances[key] = Infinity;
    });
    distances[start] = 0;

    // priority queue
    let priorityQueue = new PriorityQueue();
    for (const key in distances) {
      if (distances[key] !== 0) {
        priorityQueue.enqueue(key, distances[key]);
      }
    }

    // previous object
    const previous = {};
    for (const key in this.adjacencyList) {
      previous[key] = null;
    }

    while (priorityQueue.values.length) {
      let vertex = priorityQueue.dequeue();

      // if end we are done
      if (vertex === end) return;

      // else loop through neighbors
      const adjacentVertices = this.adjacencyList[vertex] || [];
      adjacentVertices.forEach((neighbor) => {
        // find distance by looking at path from that neighbor to start
        const edge = this.adjacencyList[vertex].find(
          (connection) => connection.node === neighbor
        );

        let newDistanceToStart = distances[vertex] + edge.weight;

        if (distances[neighbor] > newDistanceToStart) {
          distances[neighbor] = newDistanceToStart;
          previous[neighbor] = vertex;
        }
      });

      // enqueue new smallest
      priorityQueue.enqueue(vertex);
    }
  }
}
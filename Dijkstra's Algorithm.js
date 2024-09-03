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

  dijkstra(start, end) {
    // distances table
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallestVertex;

    // init state
    for (const key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        priorityQueue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        priorityQueue.enqueue(key, Infinity);
      }
      previous[key] = null;
    }

    while (priorityQueue.values.length) {
      smallestVertex = priorityQueue.dequeue().val;

      // if end we are done
      if (smallestVertex === end) {
        while (previous[smallestVertex]) {
          path.push(smallestVertex);
          smallestVertex = previous[smallestVertex];
        }
        break;
      }

      // else loop through neighbors
      if (smallestVertex || distances[smallestVertex] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallestVertex]) {
          // Find neighboring node
          let adjacentVertex = this.adjacencyList[smallestVertex][neighbor];
          // Calculate new distance to neighbor from start
          let potentiaSmallest =
            distances[smallestVertex] + adjacentVertex.weight;
          let nextNeighbor = adjacentVertex.node;
          if (potentiaSmallest < distances[nextNeighbor]) {
            // updating new smallest distance to next neighbor
            distances[nextNeighbor] = potentiaSmallest;

            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallestVertex;

            // enqueue in priority queue with new priority
            priorityQueue.enqueue(nextNeighbor, potentiaSmallest);
          }
        }
      }
    }
    return path.concat(smallestVertex).reverse();
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let n = new Node(val, priority);
    this.values.push(n);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elem = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (elem.priority >= parent.priority) break;
      this.values[parentIdx] = elem;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
    
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
      if (this.values.length > 0) {
          this.values[0] = end
          this.sinkDown();
      }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const elem = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rgtChildIdx = 2 * idx + 2;
      let leftChild, rgtChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < elem.priority) {
          swap = leftChildIdx;
        }
      }

      if (rgtChildIdx < length) {
        rgtChild = this.values[rgtChildIdx];
        if (
          (swap === null && rgtChild.priority < elem.priority) ||
          (swap !== null && rgtChild.priority < leftChild.priority)
        ) {
          swap = rgtChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = elem;
      idx = swap;
    }
  }
}

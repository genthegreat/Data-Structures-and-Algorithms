// Graph implementation using an Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vert1, vert2) {
    if (this.adjacencyList[vert1]) this.adjacencyList[vert1].push(vert2)
    if (this.adjacencyList[vert2]) this.adjacencyList[vert2].push(vert1)
  }

  removeEdge(vert1, vert2) {
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
      (v) => v !== vert2
    )
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
      (v) => v !== vert1
    )
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      const adjacentVertices = [...this.adjacencyList[vertex]]

      adjacentVertices.forEach((element) => {
        this.removeEdge(element, vertex)
      })

      delete this.adjacencyList[vertex]
    }
  }

  // Recursive Depth First Traversal
  dfTraversal(vertex) {
    const result = []
    const visited = {}

    const dfs = (vertex) => {
      if (!vertex || !this.adjacencyList[vertex]) return null

      visited[vertex] = true
      result.push(vertex)

      const adjacentVertices = this.adjacencyList[vertex] || []

      adjacentVertices.forEach((element) => {
        if (!visited[element]) dfs(element)
      })
    }

    dfs(vertex)
    return result
  }

  // Iterative Depth First Traversal
  iterativeDFS(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let vertex

    visited[start] = true

    while (stack.length) {
      console.log("stack:", stack)
      vertex = stack.pop()
      result.push(vertex)

      const adjacentVertices = this.adjacencyList[vertex] || []
      adjacentVertices.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  // Breadth First Traversal
  bfTraversal(start){
    const queue = [start]
    const result = []
    const visited = {}
    let vertex

    visited[start] = true

    while (queue.length) {
      console.log("queue:", queue)
      vertex = queue.shift()   
      result.push(vertex)

      const adjacentVertices = this.adjacencyList[vertex] || []
      adjacentVertices.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

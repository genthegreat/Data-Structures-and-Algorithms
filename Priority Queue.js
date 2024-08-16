class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(val) {
    this.values = [];
  }

  enqueue(element, priority) {
    let n = new Node(element, priority);

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
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let min = this.values.pop();
    if (this.values.length > 0) this.sinkDown();
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

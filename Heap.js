class MaxBinaryHeap {
  constructor(val) {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elem = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (elem <= parent) break;
      this.values[parentIdx] = elem;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  remove() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let node = this.values.pop();
    if (this.values.length > 0) this.sinkDown();
    return node;
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
        if (leftChild > elem) swap = leftChildIdx;
      }

      if (rgtChildIdx < length) {
        rgtChild = this.values[rgtChildIdx];
        if (
          (swap === null && rgtChild > elem) ||
          (swap !== null && rgtChild > leftChild)
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

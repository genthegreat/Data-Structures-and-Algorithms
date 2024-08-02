class MaxBinaryHeap{
    constructor(val){
        this.values = [];
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const elem = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (elem <= parent) break
            this.values[parentIdx] = elem 
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}
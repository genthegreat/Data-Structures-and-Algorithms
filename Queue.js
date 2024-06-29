class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}

class Queue{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	
	enqueue(val){
		let n = new Node(val)
		if(!this.first){
			this.first = n
			this.last = n
		} else{
			this.last.next = n
			this.last = n
		}
		return ++this.size;
	}
	
	dequeue(){
		if(!this.first) return null;
		let temp = this.first
		this.first = temp.next
		if(this.size === 0){
			this.last = null
		}
		return --this.size;
	}
}
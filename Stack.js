class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	
	push(val){
		let n = new Node(val);
		
		if(!this.first){
			this.first = n;
			this.tail = this.first;
		} else{
			n.next = this.first;
			this.first = n;
		}
		return ++this.size;
	}
	
	pop(){
		if(!this.first) return undefined;
		let temp = this.first
		this.first = temp.next
		if(this.size === 0){
			this.last = null
		}
		return --this.size;
	}
}
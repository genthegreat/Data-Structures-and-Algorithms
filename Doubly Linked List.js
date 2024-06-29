class Node{
	constructor(val){
		this.value = val;
		this.next = null;
        this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	
	push(val){
		let n = new Node(val);
		
		if(!this.head){
			this.head = n;
			this.tail = this.head;
		} else{
			this.tail.next = n;
			n.prev = this.tail;
			this.tail = n;
		}
		this.length++;
		return this;
	}
	
	pop(){
		if(!this.head) return undefined;
		let n = this.tail;
		
		if(this.length === 1){
			this.head = null
			this.tail = null
		}else{
			this.tail = n.prev
			this.tail.next = null
			n.prev = null
		}			
		this.length--
		return n
	}
	
	shift(){
		if(!this.head) return undefined;
		let n = this.head;
		
		if(this.length === 1){
			this.head = null
			this.tail = null
		}else{
			this.head = n.next
			this.head.prev = null
			n.next = null
		}			
		this.length--
		return n
	}
	
	unshift(val){
		let n = new Node(val);
		
		if(!this.head){
			this.head = n;
			this.tail = this.head;
		} else{
			this.head.prev = n;
			n.next = this.head;
			this.head = n;
		}
		this.length++;
		return this;
	}
	
	get(idx){
		if(idx < 0 || idx >= this.length) return null
		
		let half = Math.floor(this.length /2)
		if(idx < half){
			let temp = this.head	
			for(let i = 0; i < half; i++){
				if(idx === i) return temp
				temp = temp.next
			}
		}else{
			let temp = this.tail
			for(let i = this.length-1; i >= half; i--){
				if(idx === i) return temp
				temp = temp.prev
			}			
		}
	}
	
	set(idx, val){
		let n = this.get(idx)
		if(n){
			n.value = val
			return true
		}
		return false
	}
	
	insert(idx, val){
		if(idx < 0 || idx > this.length) return false
		if(idx === 0) return !!this.unshift(val)
		if(idx === this.length) return !!this.push(val)
		
		let n = new Node(val);
		let prev = this.get(idx-1)
		let after = prev.next
		
		n.next = after, after.prev = n
		n.prev = prev, prev.next = n				
		
		this.length++;
		return true
	}
	
	remove(idx){
		if(idx < 0 || idx >= this.length) return undefined
		if(idx === this.length - 1) return this.pop()
		if(idx === 0) return this.shift()
		
		let removed = this.get(idx)
		let prev = removed.prev
		let after = removed.next
		
		prev.next = after, after.prev = prev
		removed.next = null, removed.prev = null
		
		this.length--		
		return removed
	}
	
	reverse(){
		let n = this.head
		this.head = this.tail
		this.tail = n
		
		let next
		let prev = null
		
		for(let i=0; i < this.length; i++){
			next = n.next
			n.next = prev
			prev = n 
			n = next
		}		
		return this
	}
}
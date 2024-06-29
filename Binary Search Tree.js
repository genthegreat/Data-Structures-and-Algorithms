class Node {
	constructor(value){
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null
	}
	
	insert(val){
		let n = new Node(val)
		if (!this.root){ 
			this.root = n
		} else{
			let current = this.root
			while(current.value !== val){
				if(current.value < n.value){
					if(current.right){
						current = current.right
					} else{
						current.right = n
						return this
					}
				} else{
					if(current.left){
						current = current.left
					} else{
						current.left = n
						return this
					}
				}
			}
		}		
	}
	
	find(val){
		if (!this.root){ 
			return false
		} else{
			let current = this.root
			while(current.value !== val){
				if(current.value < val){
					if(current.right){
						current = current.right
					} else{
						return false
					}
				} else{
					if(current.left){
						current = current.left
					} else{
						return false
					}
				}
			}
			return true
		}	
	}

	// TREE TRAVERSAL
	bfs(){
		let queue = []
		let visited = []
		let current = this.root;
		
		queue.push(current)
		
		while(queue.length > 0){
			current = queue.shift()
			visited.push(current)
			if(current.left) queue.push(current.left)
			if(current.right) queue.push(current.right)
		}
	
		return visited
	}
	
	dfsPreOrder(){
		let visited = []
		function traverse(n){
			visited.push(n)
			if(n.left) traverse(n.left)
			if(n.right) traverse(n.right)
		}
		traverse(this.root)
		return visited
	}
	
	dfsPostOrder(){
		let visited = []
		function traverse(n){
			if(n.left) traverse(n.left)						
			if(n.right) traverse(n.right)
			visited.push(n)
		}
		traverse(this.root)
		return visited
	}
	
	dfsInOrder(){
		let visited = []
		function traverse(n){
			if(n.left) traverse(n.left)						
			visited.push(n)
			if(n.right) traverse(n.right)			
		}
		traverse(this.root)
		return visited
	}
}


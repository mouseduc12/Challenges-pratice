class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(){
    this.root = null
  }

  insert(value){
    const newNode = new Node(value)
    if(!this.root){
      this.root = newNode
      return this.root
    } else {
      let currentNode = this.root
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode 
            return this
          }
          currentNode = currentNode.left
        } else {
          if(!currentNode.right){
            currentNode.right = newNode 
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(index){
    
  }
} 

const binaryTree = new BinaryTree()
binaryTree.insert(21)
binaryTree.insert(222)
binaryTree.insert(292)
binaryTree.insert(10)
binaryTree.insert(9)
binaryTree.insert(15)

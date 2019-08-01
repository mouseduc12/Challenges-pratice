//binary tree function
class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
  constructor(){
    this.roof = nul;
  }
  add(data){
    const node = this.roof;
    if(node === null){
      this.roof = new Node(data);
      return;
    } else {
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data)
          }
        }
      }
    }
  }
}

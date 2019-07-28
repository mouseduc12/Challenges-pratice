class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
} 

class LinkedList {
  constructor(value){
    this.head = { 
      value: value,
      next: null,
    },
    this.tail = this.head
    this.length = 1 
  }

  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList(){
    const list = []
    let currentNode = this.head
    while(currentNode !== null){
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    return list
  }

  traverseToIndex(index){
    let counter = 0
    let currentNode = this.head
    while(counter !== index){
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  insert(index, value){
    if(index > this.length){
      return this.append(value)
    } else if(index <= 0){
      return this.prepend(value)
    } else {
      const newNode = new Node(value)
      const currentNode = this.traverseToIndex(index - 1)
      const nextOfCurrentNode = currentNode.next
      currentNode.next = newNode
      newNode.next = nextOfCurrentNode
      return this.printList()    
    }
  } 

  removeLastIndex(){
    const lastIndex = this.length - 3
    let counter = 0
    let currentNode = this.head
    while(counter !== lastIndex){
      counter++
      currentNode = currentNode.next
    }
    currentNode.next = null
    this.tail = currentNode
    return this.printList()
  }

  removeFirstIndex(){
    const removedfirst = this.head.next
    this.head = removedfirst
    return this.printList()
  }

  remove(index){
    if(index > this.length){
      this.removeLastIndex()
    } else if(index <= 0){
      this.removeFirstIndex()
    } else {
      let currentNode = this.traverseToIndex(index - 1)
      let unwantedNode = currentNode.next
      currentNode.next = unwantedNode.next 
      return this.printList()
    }
  } 
}

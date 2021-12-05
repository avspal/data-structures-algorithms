/**
 * value - number or any type to initialize node
 * return - new instance of Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * return - new instance of Stack, in which we can perform push, pop and peek operations
 */
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return "stack overflow";
    }
    let removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode.value;
  }

  peek() {
    if (this.head == null) {
      return "empty stack";
    }

    return this.head.value;
  }

  print() {
    let start = this.head;
    while (start != null) {
      console.log(start.value);
      start = start.next;
    }
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.print();
myStack.push(2);
myStack.print();
myStack.push(3);
myStack.print();

myStack.pop();
myStack.print();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    const nodeToAdd = new Node(data);
    if (!this.head) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      return;
    }
    const tempNode = this.head;
    this.head = nodeToAdd;
    this.head.next = tempNode;
  }

  insertLast(data) {
    const nodeToAdd = new Node(data);
    if (!this.head) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      return;
    }
    const prevTail = this.tail;
    this.tail = nodeToAdd;
    prevTail.next = this.tail;
  }

  find(value) {
    if (!this.head) {
      return -1;
    }
    let curNode = this.head;
    let nodeFound;

    while (curNode) {
      if (curNode.data === value) {
        nodeFound = curNode;
        break;
      }
      curNode = curNode.next;
    }
    return nodeFound;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    const nodeRemoved = this.head;
    this.head = this.head.next;
    return nodeRemoved.data;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    let prevNode = this.head;
    let node = this.head.next;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    const removedNode = this.tail;
    this.tail = prevNode;
    this.tail.next = null;
    return removedNode.data;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

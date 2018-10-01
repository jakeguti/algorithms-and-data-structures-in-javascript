import LinkedList from '../singly-linked-list/singly-linked-list';

export default class Queue {
  constructor() {
    this._items = new LinkedList();
    this._length = 0;
  }

  enqueue(elem) {
    this._items.insertLast(elem);
    this._length += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    const removedElem = this._items.removeFirst();
    this._length -= 1;
    return removedElem;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this._items.head.data;
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
  }
}

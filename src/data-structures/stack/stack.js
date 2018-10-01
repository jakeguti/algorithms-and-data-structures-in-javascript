import LinkedList from '../singly-linked-list/singly-linked-list';

export default class Stack {
  constructor() {
    this._length = 0;
    this._items = new LinkedList();
  }

  push(data) {
    this._items.insertLast(data);
    this._length += 1;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this._items.tail.data;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    this._length -= 1;
    return this._items.removeLast();
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
  }
}

import LinkedList from '../singly-linked-list';

describe('Singly-Linked-List', () => {
  it('should create an empty linked list', () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
  });

  it('should insert a node to head', () => {
    const ll = new LinkedList();
    ll.insertFirst('Canada');
    ll.insertFirst('USA');
    ll.insertFirst('Hungary');
    expect(ll.head.data).toBe('Hungary');
    expect(ll.tail.data).toBe('Canada');
  });

  it('should insert a node to the tail', () => {
    const ll = new LinkedList();
    ll.insertFirst('Canada');
    ll.insertLast('Sweden');
    ll.insertLast('Hungary');
    expect(ll.tail.data).toBe('Hungary');
  });

  it('should remove a node from the head', () => {
    const ll = new LinkedList();
    ll.insertFirst('Canada');
    ll.insertFirst('Sweden');
    ll.insertLast('USA');
    const nodeRemoved = ll.removeFirst();
    expect(nodeRemoved).toBe('Sweden');
    expect(ll.head.data).toBe('Canada');
  });

  it('should remove a node from the tail', () => {
    const ll = new LinkedList();
    ll.insertFirst('Sweden');
    ll.insertLast('Canada');
    ll.insertLast('USA');
    const nodeRemoved = ll.removeLast();
    expect(nodeRemoved).toBe('USA');
    expect(ll.tail.data).toBe('Canada');
  });

  it('should clear the list', () => {
    const ll = new LinkedList();
    ll.insertFirst('Canada');
    ll.insertFirst('Norway');
    ll.insertLast('Sweden');
    ll.insertLast('Hungary');
    ll.clear();
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
  });

  it('should find a node by value', () => {
    const ll = new LinkedList();
    ll.insertFirst('Canada');
    ll.insertFirst('Sweden');
    ll.insertLast('Hungary');
    ll.insertLast('Norway');

    const nodeFound = ll.find('Sweden');
    expect(nodeFound.data).toBe('Sweden');
  });
});

import Queue from '../queue';

describe('Queue', () => {
  it('should create an empty Queue', () => {
    const qu = new Queue();
    expect(qu.isEmpty()).toBeTruthy();
  });

  it('should add an element to the back of the queue', () => {
    const qu = new Queue();
    qu.enqueue('Canada');
    expect(qu.peek()).toBe('Canada');
  });

  it('should remove the first element inserted in the queue', () => {
    const qu = new Queue();
    qu.enqueue('Hungary');
    qu.enqueue('Canada');
    const removedElem = qu.dequeue();
    expect(removedElem).toBe('Hungary');
  });

  it('should remove and return the first element inserted in the queue', () => {
    const qu = new Queue();
    qu.enqueue('Norway');
    qu.enqueue('Canada');
    qu.enqueue('Sweden');
    expect(qu.peek()).toBe('Norway');
  });

  it('should return -1 if dequeue is used on an empty queue', () => {
    const qu = new Queue();
    expect(qu.dequeue()).toBe(-1);
  });

  it('should return the number of elements in the queue', () => {
    const qu = new Queue();
    qu.enqueue('Canada');
    qu.enqueue('Hungary');
    qu.enqueue('Sweden');
    qu.enqueue('USA');
    qu.enqueue('Ireland');
    qu.dequeue();
    expect(qu.size()).toBe(4);
  });
});

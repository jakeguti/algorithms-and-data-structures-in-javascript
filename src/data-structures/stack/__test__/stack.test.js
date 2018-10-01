import Stack from '../stack';

describe('Stack', () => {
  it('should create an empty stack', () => {
    const st = new Stack();
    expect(st.isEmpty()).toBeTruthy();
  });

  it('should push an item to the stack', () => {
    const st = new Stack();
    st.push('Canada');
    st.push('Sweden');
    expect(st.peek()).toBe('Sweden');
  });

  it('should return the first item of the stack', () => {
    const st = new Stack();
    st.push('Canada');
    st.push('Sweden');
    expect(st.peek()).toBe('Sweden');
  });

  it('should pop an item off the stack', () => {
    const st = new Stack();
    st.push('Hungary');
    st.push('Sweden');
    st.push('Canada');
    const poppedItem = st.pop();
    expect(poppedItem).toBe('Canada');
  });

  it('should return -1 if stack trying to pop an item off an empty stack', () => {
    const st = new Stack();
    expect(st.pop()).toBe(-1);
  });

  it('should return 0 if stack is empty', () => {
    const st = new Stack();
    expect(st.size()).toBe(0);
  });

  it('should return the number of elements in the stack', () => {
    const st = new Stack();
    st.push('Canada');
    st.push('Sweden');
    st.push('Sweden');
    st.pop();
    expect(st.size()).toBe(2);
  });
});

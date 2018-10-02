import bubbleSort from '../bubble-sort';

describe('Bubble Sort', () => {
  it('should return a sorted array', () => {
    expect(bubbleSort([3, 2, 1, 4, 8, 6, 7])).toEqual([1, 2, 3, 4, 6, 7, 8]);
  });

  it('should work with 2 numbers only', () => {
    expect(bubbleSort([3, 2])).toEqual([2, 3]);
  });

  it('should work with an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
});

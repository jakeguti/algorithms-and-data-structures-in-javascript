import selectionSort from '../selection-sort';

describe('Selection Sort', () => {
  it('should return array sorted', () => {
    expect(selectionSort([3, 5, 2, 1, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should work with an array of 2 values', () => {
    expect(selectionSort([5, 3])).toEqual([3, 5]);
  });

  it('should work with sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should work with empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });
});

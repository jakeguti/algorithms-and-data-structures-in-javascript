import binarySearch from '../binary-search';

describe('Binary Search', () => {
  it('should return the position of the item in the array, if item exists', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)).toBe(7);
  });

  it('should work with a sorted list of 2 items', () => {
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
  });

  it('should return -1 if item is not in the sorted list', () => {
    const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(sortedList, 0)).toBe(-1);
  });
});

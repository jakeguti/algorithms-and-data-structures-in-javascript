import quickSort from '../quick-sort';

describe('Quicksort', () => {
  it('should sort the array', () => {
    const arr = [3, 2, 4, 1, 7, 8];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 7, 8]);
  });

  it('should work with a sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should work with negative numbers', () => {
    const arr = [2, -2, 4, 1, -7, 8];
    expect(quickSort(arr)).toEqual([-7, -2, 1, 2, 4, 8]);
  });

  it('should work with arrays of size 1', () => {
    const arr = [3, 2, 4, 1, 7, 8];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 7, 8]);
  });

  it('should work with emppty arrays', () => {
    const arr = [];
    expect(quickSort(arr)).toEqual([]);
  });
});

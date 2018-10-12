import insertionSort from '../insertion-sort';

describe('Insertion Sort', () => {
  it('should sort an array', () => {
    const arr = [4, 1, 2, 3, 7, 5];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it('should work with an array of 2 items', () => {
    const arr = [4, 1];
    expect(insertionSort(arr)).toEqual([1, 4]);
  });

  it('should work with an array of 1 item', () => {
    const arr = [4];
    expect(insertionSort(arr)).toEqual([4]);
  });

  it('should work with an empty array', () => {
    const arr = [];
    expect(insertionSort(arr)).toEqual([]);
  });

  it('should work with an array with negative values', () => {
    const arr = [1, -1, 4, -2, 2, 3, 5];
    expect(insertionSort(arr)).toEqual([-1, -2, 1, 2, 3, 4, 5]);
  });
});

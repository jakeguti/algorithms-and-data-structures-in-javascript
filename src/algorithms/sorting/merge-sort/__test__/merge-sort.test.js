import mergeSort from '../merge-sort';

describe('Merge Sort', () => {
  it('should sort an array', () => {
    const arr = [2, 1, 4, 3, 7, 8];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7, 8]);
  });

  it(' work with negative numbers', () => {
    const arr = [-20, 5, -2, 1, 4, 7, 3, 2];
    expect(mergeSort(arr)).toEqual([-20, -2, 1, 2, 3, 4, 5, 7]);
  });

  it('should work with an array of size 2', () => {
    const arr = [5, 3];
    expect(mergeSort(arr)).toEqual([3, 5]);
  });

  it('should work with a single item array', () => {
    const arr = [5];
    expect(mergeSort(arr)).toEqual([5]);
  });

  it('should work with an empty array', () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });
});

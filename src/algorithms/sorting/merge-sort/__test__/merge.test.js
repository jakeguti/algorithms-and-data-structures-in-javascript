import merge from '../merge';

describe('Merge function', () => {
  it('should merge 2 sorted arrays', () => {
    const arr1 = [2, 3, 4];
    const arr2 = [5, 6, 7];
    expect(merge(arr1, arr2)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it('should work with arrays of size 1', () => {
    const arr1 = [2];
    const arr2 = [5];
    expect(merge(arr1, arr2)).toEqual([2, 5]);
  });

  it('should work with empty arrays', () => {
    const arr1 = [];
    const arr2 = [];
    expect(merge(arr1, arr2)).toEqual([]);
  });
});

import linearSearch from '../linear-search';

describe('Linear Search', () => {
  it('should return the position of the item in the array', () => {
    expect(linearSearch([1, 2, 4, 7, 8], 2)).toBe(1);
    expect(linearSearch([1, 2, 4, 7, 8], 4)).toBe(2);
  });

  it('should work with 2 items', () => {
    expect(linearSearch([2, 5], 5)).toBe(1);
    expect(linearSearch([2, 5], 2)).toBe(0);
  });

  it('should work with 1 item', () => {
    expect(linearSearch([2], 2)).toBe(0);
  });

  it('should return -1 if array is empty', () => {
    expect(linearSearch([], 2)).toBe(-1);
  });

  it('should return -1 if item to be searched is not in the array', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 7)).toBe(-1);
  });
});

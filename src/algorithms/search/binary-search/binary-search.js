const binarySearch = (sortedList, item) => {
  let low = 0;
  let high = sortedList.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedList[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

export default binarySearch;

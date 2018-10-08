const quickSort = (array) => {
  const pivot = array[0];
  const lesser = [];
  const greater = [];

  if (array.length < 2) {
    return array;
  }

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      lesser.push(array[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
};

export default quickSort;

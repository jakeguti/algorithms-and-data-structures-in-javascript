const insertionSort = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    const key = array[i];
    let j = i - 1;

    while (array[j] >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
  return array;
};

export default insertionSort;

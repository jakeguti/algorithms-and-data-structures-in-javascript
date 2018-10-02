const selectionSort = (itemsArray) => {
  for (let i = 0; i < itemsArray.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < itemsArray.length; j += 1) {
      if (itemsArray[j] < itemsArray[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = itemsArray[minIndex];
      itemsArray[minIndex] = itemsArray[i];
      itemsArray[i] = temp;
    }
  }
  return itemsArray;
};

export default selectionSort;

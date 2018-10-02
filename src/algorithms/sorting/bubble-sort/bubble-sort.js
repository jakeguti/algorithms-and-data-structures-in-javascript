const bubbleSort = (itemsArray) => {
  for (let i = 0; i < itemsArray.length - 1; i += 1) {
    for (let j = 0; j < itemsArray.length - i - 1; j += 1) {
      if (itemsArray[j] > itemsArray[j + 1]) {
        const tmpItem = itemsArray[j];
        itemsArray[j] = itemsArray[j + 1];
        itemsArray[j + 1] = tmpItem;
      }
    }
  }
  return itemsArray;
};

export default bubbleSort;

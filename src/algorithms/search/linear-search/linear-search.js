const linearSearch = (itemsArray, item) => {
  for (let i = 0; i < itemsArray.length; i += 1) {
    if (item === itemsArray[i]) {
      return i;
    }
  }
  return -1;
};

export default linearSearch;

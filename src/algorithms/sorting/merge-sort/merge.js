const merge = (leftArray, rightArray) => {
  const combinedArray = [];
  const leftArrayIndex = 0;
  const rightArrayIndex = 0;
  while (leftArray.length && rightArray.length) {
    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      combinedArray.push(leftArray.shift());
    } else {
      combinedArray.push(rightArray.shift());
    }
  }
  return [...combinedArray, ...leftArray, ...rightArray];
};

export default merge;

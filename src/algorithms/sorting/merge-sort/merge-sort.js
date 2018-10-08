import merge from './merge';

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const middleItem = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleItem);
  const rightHalf = array.slice(middleItem);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

export default mergeSort;

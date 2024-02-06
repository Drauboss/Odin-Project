/**
 *
 * @param {Array} arr
 * @returns
 */
function mergeSort(arr) {
  const sortedArray = [];
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }

  const borderIndex = Math.floor(arr.length / 2);

  const leftArray = mergeSort(arr.slice(0, borderIndex));
  console.log("left array: ", leftArray);
  const rightArray = mergeSort(arr.slice(borderIndex, arr.length));
  console.log("right array", rightArray);

  /**
   *
   * @param {Array} leftArray
   * @param {Array} rightArray
   * @returns
   */
  function mergeArray(leftArray, rightArray) {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }

    // If there are remaining elements in either array, add them to the end of sortedArray
    return sortedArray.concat(leftArray, rightArray);
  }

  return mergeArray(leftArray, rightArray);
}
console.log(mergeSort([1, 2, 3, 8, 96, 1, 2, 6]));

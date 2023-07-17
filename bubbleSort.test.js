const assert = require('assert');
const bubbleSort = require('./bubbleSort');

describe('Bubble Sort', () => {
  it('should sort an array of numbers', () => {
    const unsortedArray = [5, 3, 8, 1, 2];
    const sortedArray = [1, 2, 3, 5, 8];

    assert.deepStrictEqual(bubbleSort(unsortedArray), sortedArray);
  });

  it('should handle an empty array', () => {
    const emptyArray = [];

    assert.deepStrictEqual(bubbleSort(emptyArray), []);
  });

  it('should handle an array with one element', () => {
    const singleElementArray = [42];

    assert.deepStrictEqual(bubbleSort(singleElementArray), [42]);
  });

  it('should handle an array with duplicate elements', () => {
    const arrayWithDuplicates = [5, 3, 5, 1, 3];
    const sortedArray = [1, 3, 3, 5, 5];

    assert.deepStrictEqual(bubbleSort(arrayWithDuplicates), sortedArray);
  });
});
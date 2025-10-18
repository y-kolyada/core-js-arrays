/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
  if (start > end) {
    throw new Error('Invalid interval');
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// console.log(getIntervalArray(1, 5)); // [1, 2, 3, 4, 5]
// console.log(getIntervalArray(-2, 2)); // [-2, -1, 0, 1, 2]
// console.log(getIntervalArray(0, 100)); // [0, 1, 2, ..., 100]
// console.log(getIntervalArray(3, 3)); // [3]

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays');
  }
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const maxLength = Math.max(arr1.length, arr2.length);
  const result = Array.from({ length: maxLength }, (_, i) => {
    const val1 = arr1[i] || 0;
    const val2 = arr2[i] || 0;
    return val1 + val2;
  });
  return result;
}

// console.log(sumArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
// console.log(sumArrays([10, 20, 30], [5, 10, 15])); // [15, 30, 45]
// console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4])); // [0, 2, 4, 4]

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (arr.length === 0) {
    return -1;
  }
  if (value === undefined || value === null || Number.isNaN(value)) {
    return -1;
  }
  return arr.indexOf(value);
}

// console.log(findElement(['Ace', 10, true], 10)); // 1
// console.log(findElement(['Array', 'Number', 'string'], 'Date')); // -1
// console.log(findElement([0, 1, 2, 3, 4, 5], 5)); // 5

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (item === undefined || Number.isNaN(item)) {
    return 0;
  }
  return arr.reduce((count, current) => {
    return count + (current === item ? 1 : 0);
  }, 0);
}

// console.log(findAllOccurrences([0, 0, 1, 1, 1, 2], 1)); // 3
// console.log(findAllOccurrences([1, 2, 3, 4, 5], 0)); // 0
// console.log(findAllOccurrences(['a', 'b', 'c', 'c'], 'c')); // 2
// console.log(findAllOccurrences([null, undefined, null], null)); // 2
// console.log(findAllOccurrences([true, 0, 1, 'true'], true)); // 1

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  return arr.filter(Boolean);
}

// console.log(removeFalsyValues([0, false, 'cat', NaN, true, ''])); // ['cat', true]
// console.log(removeFalsyValues([1, 2, 3, 4, 5, 'false'])); // [1, 2, 3, 4, 5, 'false']
// console.log(removeFalsyValues([false, 0, NaN, '', undefined])); // []

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  return arr.map((item) => {
    if (typeof item !== 'string') {
      throw new Error('Array must contain only strings');
    }
    return item.length;
  });
}

// console.log(getStringsLength(['', 'a', 'bc', 'def', 'ghij'])); // [0, 1, 2, 3, 4]
// console.log(getStringsLength(['angular', 'react', 'ember'])); // [7, 5, 5]

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 *   getAverage([ 2, 3, 3.1 ])  => 2,70
 */
function getAverage(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, curr) => {
    if (typeof curr !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return acc + curr;
  }, 0);

  return parseFloat((sum / arr.length).toFixed(2));
}

// console.log(getAverage([])); // 0
// console.log(getAverage([1, 2, 3])); // 2
// console.log(getAverage([-1, 1, -1, 1])); // 0
// console.log(getAverage([1, 10, 100, 1000])); // 277.75
// console.log(getAverage([2, 3, 3])); // 2.67
// console.log(getAverage([2, 3, 3.1])); // 2.70

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (arr.length === 0) {
    return true;
  }

  const firstItemLength = arr[0].length;

  return arr.every((item) => {
    if (typeof item !== 'string') {
      throw new Error('Array must contain only strings');
    }
    return item.length === firstItemLength;
  });
}

// console.log(isSameLength(['orange', 'banana', 'cherry'])); // true
// console.log(isSameLength(['cat', 'dog', 'elephant'])); // false

/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  return arr.some((item, index) => item === index);
}

// console.log(isValueEqualsIndex([0, 1, 2, 3, 4])); // true
// console.log(isValueEqualsIndex([2, 1, 0, 4, 5])); // true
// console.log(isValueEqualsIndex([10, 20, 30, 40, 50])); // false

/**
 * Inserts the item into specified array at specified index don't using slice.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]} The new array with the item inserted.
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (index < 0 || index > arr.length) {
    throw new Error('Invalid index');
  }

  arr.splice(index, 0, item);
  return arr;
}

// console.log(insertItem([1, 3, 4, 5], 2, 1)); // [1, 2, 3, 4, 5]
// console.log(insertItem([1, 'b', 'c'], 'x', 0)); // ['x', 1, 'b', 'c']

/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]} The n first items.
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 *    getHead([ 'a', 'b', 'c', 'd'], 6) => [ 'a', 'b', 'c', 'd' ]
 */
function getHead(arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Second argument must be a non-negative number');
  }
  return arr.slice(0, n);
}

// console.log(getHead([1, 3, 4, 5], 2)); // [1, 3]
// console.log(getHead(['a', 'b', 'c', 'd'], 3)); // ['a', 'b', 'c']
// console.log(getHead(['a', 'b', 'c', 'd'], 0)); // []
// console.log(getHead(['a', 'b', 'c', 'd'], 6)); // ['a', 'b', 'c', 'd']

/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]} The n last items.
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Second argument must be a non-negative number');
  }
  if (n === 0) {
    return [];
  }
  return arr.slice(-n);
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (arr.length === 0) {
    return [];
  }

  return arr.concat(arr);
}

// console.log(doubleArray(['Ace', 10, true])); // ['Ace', 10, true, 'Ace', 10, true]
// console.log(doubleArray([0, 1, 2, 3, 4, 5])); // [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
// console.log(doubleArray([])); // []

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  return arr.join(',');
}

// console.log(toStringList([0, false, 'cat', NaN, true, ''])); // '0,false,cat,NaN,true,'
// console.log(toStringList([1, 2, 3, 4, 5])); // '1,2,3,4,5'
// console.log(toStringList(['rock', 'paper', 'scissors'])); // 'rock,paper,scissors'

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  return Array.from(new Set(arr));
}

// console.log(distinct([1, 2, 3, 3, 2, 1])); // [1, 2, 3]
// console.log(distinct(['a', 'a', 'a', 'a'])); // ['a']
// console.log(distinct([1, 1, 2, 2, 3, 3, 4, 4])); // [1, 2, 3, 4]
// console.log(distinct([])); // []

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
  if (n < 1 || size < 1) {
    throw new Error('Both n and size must be greater than 0');
  }

  if (n === 1) {
    return Array(size).fill(0);
  }

  return Array(size)
    .fill(null)
    .map(() => createNDimensionalArray(n - 1, size));
}

// console.log(createNDimensionalArray(2, 3)); // [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// console.log(createNDimensionalArray(3, 2)); // [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
// console.log(createNDimensionalArray(4, 2)); // [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
// console.log(createNDimensionalArray(1, 1)); // [0]

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
  if (!Array.isArray(nestedArray)) {
    throw new Error('Input must be an array');
  }

  return nestedArray.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flattenArray(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
// console.log(flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f'])); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(flattenArray([1, 2, 3, 4])); // [1, 2, 3, 4]

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof childrenSelector !== 'function') {
    throw new Error('Second argument must be a function');
  }

  return arr.flatMap(childrenSelector);
}

// console.log(selectMany([[1, 2], [3, 4], [5, 6]], (x) => x)); // [1, 2, 3, 4, 5, 6]
// console.log(selectMany(['one', 'two', 'three'], (x) => x.split(''))); // ['o','n','e','t','w','o','t','h','r','e','e']

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  return arr.reduce((acc, [income, expense]) => acc + (income - expense), 0);
}

// console.log(calculateBalance([[10, 8], [5, 1]])); // 6
// console.log(calculateBalance([[10, 8], [1, 5]])); // -2
// console.log(calculateBalance([])); // 0

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof chunkSize !== 'number' || chunkSize <= 0) {
    throw new Error('Chunk size must be a positive number');
  }

  const numChunks = Math.ceil(arr.length / chunkSize);
  return Array.from({ length: numChunks }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
}

// console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(createChunks(['a', 'b', 'c', 'd', 'e'], 2)); // [['a', 'b'], ['c', 'd'], ['e']]
// console.log(createChunks([10, 20, 30, 40, 50], 1)); // [[10], [20], [30], [40], [50]]

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
  if (typeof len !== 'number' || len < 0) {
    throw new Error('Length must be a non-negative number');
  }
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

// console.log(generateOdds(0)); // []
// console.log(generateOdds(1)); // [1]
// console.log(generateOdds(2)); // [1, 3]
// console.log(generateOdds(5)); // [1, 3, 5, 7, 9]

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1   (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2       (arr[0][0][1])
 */
function getElementByIndices(arr, indices) {
  return indices.reduce((acc, index) => acc[index], arr);
}

// console.log(getElementByIndices([[1, 2], [3, 4], [5, 6]], [0, 0])); // 1
// console.log(getElementByIndices(['one', 'two', 'three'], [2])); // 'three'
// console.log(getElementByIndices([[[1, 2, 3]]], [0, 0, 1])); // 2

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  return arr.reduce((count, item) => count + (item ? 0 : 1), 0);
}

// console.log(getFalsyValuesCount([])); // 0
// console.log(getFalsyValuesCount([1, '', 3])); // 1
// console.log(getFalsyValuesCount([-1, 'false', null, 0])); // 2
// console.log(getFalsyValuesCount([null, undefined, NaN, false, 0, ''])); // 6

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  if (typeof n !== 'number' || n <= 0) {
    throw new Error('Size must be a positive number');
  }

  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => (i === j ? 1 : 0))
  );
}

// console.log(getIdentityMatrix(1)); // [[1]]
// console.log(getIdentityMatrix(2)); // [[1,0],[0,1]]
// console.log(getIdentityMatrix(5)); // [[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('First argument must be an array');
  }

  return numbers.reduce((indices, num, index) => {
    if (num % 2 !== 0) {
      indices.push(index);
    }
    return indices;
  }, []);
}

// console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5])); // [0, 2, 4]
// console.log(getIndicesOfOddNumbers([2, 4, 6, 8, 10])); // []
// console.log(getIndicesOfOddNumbers([11, 22, 33, 44, 55])); // [0, 2, 4]

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  return arr.map((num) => {
    if (typeof num !== 'number' || num < 0 || num > 16777215) {
      throw new Error('Array must contain numbers in the range 0 to 16777215');
    }
    const hex = num.toString(16).toUpperCase().padStart(6, '0');
    return `#${hex}`;
  });
}

// console.log(getHexRGBValues([0, 255, 16777215])); // ['#000000', '#0000FF', '#FFFFFF']
// console.log(getHexRGBValues([])); // []

/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number' || n <= 0) {
    throw new Error('Invalid input');
  }

  return arr
    .slice()
    .sort((a, b) => b - a)
    .slice(0, n);
}

// console.log(getMaxItems([], 5)); // []
// console.log(getMaxItems([1, 2], 1)); // [2]
// console.log(getMaxItems([2, 3, 1], 2)); // [3, 2]
// console.log(getMaxItems([10, 2, 7, 5, 3, -5], 3)); // [10, 7, 5]
// console.log(getMaxItems([10, 10, 10, 10], 3)); // [10, 10, 10

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays');
  }

  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

// console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
// console.log(findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
// console.log(findCommonElements([1, 2, 3], ['a', 'b', 'c'])); // []

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('First argument must be an array');
  }

  if (nums.length === 0) {
    return 0;
  }

  const result = nums.reduce(
    (acc, curr, index) => {
      if (index === 0) {
        return acc;
      }

      if (curr > nums[index - 1]) {
        acc.currentLength += 1;
      } else {
        acc.maxLength = Math.max(acc.maxLength, acc.currentLength);
        acc.currentLength = 1;
      }

      return acc;
    },
    { maxLength: 0, currentLength: 1 }
  );

  return Math.max(result.maxLength, result.currentLength);
}

// console.log(findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])); // 3
// console.log(findLongestIncreasingSubsequence([3, 10, 2, 1, 20])); // 2
// console.log(findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80])); // 3

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

// console.log(propagateItemsByPositionIndex([])); // []
// console.log(propagateItemsByPositionIndex([1])); // [1]
// console.log(propagateItemsByPositionIndex(['a', 'b'])); // ['a', 'b', 'b']
// console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null])); // ['a', 'b', 'b', 'c', 'c', 'c', null, null, null, null]
// console.log(propagateItemsByPositionIndex([1, 2, 3, 4, 5])); // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  const { length } = arr;
  const shift = ((n % length) + length) % length;

  return arr.slice(-shift).concat(arr.slice(0, -shift));
}

// console.log(shiftArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// console.log(shiftArray(['a', 'b', 'c', 'd'], -1)); // ['b', 'c', 'd', 'a']
// console.log(shiftArray([10, 20, 30, 40, 50], -3)); // [40, 50, 10, 20, 30

/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  const digitOrder = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return arr
    .slice()
    .sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

// console.log(sortDigitNamesByNumericOrder([])); // []
// console.log(sortDigitNamesByNumericOrder(['nine', 'one'])); // ['one', 'nine']
// console.log(sortDigitNamesByNumericOrder(['one', 'two', 'three'])); // ['one', 'two', 'three']
// console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight'])); // ['eight', 'eight', 'nine', 'nine']
// console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero'])); // ['zero', 'one', 'one', 'one']

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(/* arr */) {
  throw new Error('Not implemented');
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};

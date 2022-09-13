// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6

function adjacentElementsProduct(array) {
    let higher = -Infinity
    array.forEach((e,i) => e * array[i+1] > higher ? higher = e * array[i+1] : 'we')
    return higher
  }
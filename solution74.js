// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(arr){
    return Math.floor(arr.reduce((cv,iv) => cv + iv, 1) / arr.length)
  }
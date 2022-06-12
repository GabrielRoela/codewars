// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  
    let result = arr.map(e => e * e * e).filter(e => e % 2 != 0).reduce((cv, iv) => cv + iv, 0)
    
    return isNaN(result) ? undefined : result
    
  }
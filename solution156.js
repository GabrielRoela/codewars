// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr){
    let trigger = false
    arr.forEach (e => {
      if(e > 9 || e < 0){
        trigger = true
      }
    })
    
    if(trigger || arr.length == 0){
      return null
    }
    
    let arr2 = []
    arr.reverse()
    
    while(arr[0] === 9){
      arr.shift()
      arr2.unshift(0)
    }
    if(arr.length == 0){
      arr2.unshift(1)
      return arr2
    }
    arr2.unshift(Number(arr.shift()) + 1)
    
    while(arr.length > 0){
      arr2.unshift(arr.shift())
    }
    return arr2
  }
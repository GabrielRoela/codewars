// Write a function reverse which reverses a list

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let result = []
    for(let i = array.length - 1; i >= 0; i--){
      result.push(array[i])
    }
    return result
  }
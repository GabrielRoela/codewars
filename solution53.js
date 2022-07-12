// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let length = 0
    let index = 0
    array.forEach((e,i) =>{
      if(String(e).split('').length > length){
        length = String(e).split('').length
        index = i
      }
    })
    return array[index]
  }
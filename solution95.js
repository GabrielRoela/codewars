// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr){
  
    let hashMap = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    
    arr.forEach((e,i) => {
      if(hashMap[e]){
        arr[i] = hashMap[e]
      }
    })
    
    return arr
  }
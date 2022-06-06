// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  
    if (n == 0) return 0
    
    let arr = n.toString().split('')
    
    while(arr[arr.length - 1] == '0'){
      arr.pop()
    }
    
    return Number(arr.join(''))
  }
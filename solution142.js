// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
    let dataManip = str.trim().split(' ')
    dataManip.forEach((e,i) => {
      if(i % 2 != 0){
        dataManip[i] = e.trim().split('').reverse().join('')
      }else{
        dataManip[i] = e.trim()
      }
    })
    return dataManip.join(' ')
  }
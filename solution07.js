// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let test = 'aeiou'
    let arr = s.split('')
    arr.forEach((e,i) => test.includes(e.toLowerCase()) ? arr[i] = '!' : 'w/e')
    return arr.join('')
  }
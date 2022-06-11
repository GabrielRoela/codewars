// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let test = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    let manipulate = string.split('')
    for (let i = 0; i<manipulate.length; i++){
      if(test.includes(manipulate[i])){
        manipulate.splice(i,0,' ')
        i++
      }
    }
                       
    return manipulate.join('')
}

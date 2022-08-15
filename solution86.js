// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array){
    let alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphabetUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    if(alphabetLower.includes(array[0])){
        let testing = alphabetLower.slice( alphabetLower.indexOf(array[0]) , alphabetLower.indexOf(array[array.length - 1]) + 1)
        let shitToReturn 
        testing.forEach(e => {
            if(!array.includes(e)){
                shitToReturn = e
            }
        })
        return shitToReturn
        
    }

    if(alphabetUpper.includes(array[0])){
        let testing = alphabetUpper.slice( alphabetUpper.indexOf(array[0]) , alphabetUpper.indexOf(array[array.length - 1]) + 1)
        let shitToReturn 
        testing.forEach(e => {
            if(!array.includes(e)){
                shitToReturn = e
            }
        })
        return shitToReturn
        
    }

  }

console.log(findMissingLetter(["O","Q","R","S"]))
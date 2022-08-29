// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


function toWeirdCase(string){
    let arr = string.split(' ')
    arr.forEach((e,i) => arr[i] = e.split(''))
    arr.forEach((e,i) => e.forEach((el,ind) => ind % 2 == 0 ? arr[i][ind] = el.toUpperCase() : arr[i][ind] = el.toLowerCase()))
    arr.forEach((e,i) => arr[i] = e.join(''))

    return arr.join(' ')
  }

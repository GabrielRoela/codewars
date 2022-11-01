// DESCRIPTION:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    let dataManip = str.split(' ').map(e => e.trim()).reverse()
    let reverseCase = dataManip.map(e => {
        let arr = e.split('')
        return arr.map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('')
    })
    return reverseCase.join(' ')
}
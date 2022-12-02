// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverse(string){
    let newString = ''
    for(let i = string.length - 1; i <= 0; i--){
        newString += string[i]
    }
    return newString
}
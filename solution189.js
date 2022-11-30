// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

function isAlt(string){
    let vowels = 'aeiou'
    function isVowel(str){
        return vowels.includes(str)
    }

    for(let i = 1; i < string.length; i++){
        if(isVowel(string[i]) && isVowel(string[i-1])){
            return false
        }
        if(!isVowel(string[i]) && !isVowel(string[i-1])){
            return false
        }
    }
    return true
}
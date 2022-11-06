// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

var validPalindrome = function(s) {
    if(s === s.split('').reverse().join('')){
        return true
    }

    for(let i = 0; i<s.length; i++){
        let arr = s.split('')
        arr.splice(i,1)
        if(arr.join('') === arr.reverse().join('')){
            return true
        }
    }

    return false
};
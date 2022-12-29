// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

var detectCapitalUse = function(word) {
    let trigger1 = false
    let trigger2 = false
    let trigger3 = false

    word.split('').every(e => e === e.toUpperCase()) ? trigger1 = true : 'we'
    word.split('').every(e => e === e.toLowerCase()) ? trigger2 = true : 'we'
    word[0] === word[0].toUpperCase() && word.slice(1).split('').every(e => e === e.toLowerCase()) ? trigger3 = true : 'we'

    if(trigger1 || trigger2 || trigger3){
        return true
    }
    return false
};
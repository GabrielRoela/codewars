// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

var maxNumberOfBalloons = function(text) {
    let targetWord = 'balloon'
    let counter = {
        b:0,
        a:0,
        l:0,
        o:0,
        n:0,
    }

    text.toLowerCase().split('').forEach(e => e in counter ? counter[e]++ : 'do nothing')

    counter['l'] = Math.floor(counter['l'] / 2)
    counter['o'] = Math.floor(counter['o'] / 2)
    return Object.values(counter).sort((a,b) => a-b)[0]
};
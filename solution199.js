// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and/or digits.

var secondHighest = function(s) {
    let digits = '0123456789'
    let numbers = []
    s.split('').forEach(e => digits.includes(e) ? numbers.push(Number(e)) : 'we')
    numbers.sort((a,b) => b - a)
    if(numbers.every (e => e === numbers[0])){
        return -1
    }

    return numbers.filter((e,i) => numbers.indexOf(e) === i)[1]
};
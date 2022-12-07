// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

var numJewelsInStones = function(jewels, stones) {
    let counter = 0
    stones.split('').forEach(e => jewels.includes(e) ? counter ++ : 'we')
    return counter
};

var numJewelsInStones2 = function (jewels, stones){
    let hashMap = stones.split('').reduce((counter, char) => {
        if(char in counter){
            counter[char]++
        }else{
            counter[char] = 1
        }
        return counter
    }, {})

    let counter = 0

    jewels.split('').forEach(e => e in hashMap ? counter += hashMap[e] : 'we')

    return counter
}
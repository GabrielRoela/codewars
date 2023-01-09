// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) {return word}

    let iToSlice = word.indexOf(ch)
    return word.slice(0,iToSlice + 1).split('').reverse().join('') + word.slice(iToSlice + 1)
};
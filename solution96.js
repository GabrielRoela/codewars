// Description
// get the frequency of each and every character in a string!

// Explanation
// You will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}


function charFreq(message) {
    return message.split('').reduce((countedLetters, letter) => {
      if(letter in countedLetters){
        countedLetters[letter]++
      }else{
        countedLetters[letter] = 1
      }
      return countedLetters
    }, { })
  }
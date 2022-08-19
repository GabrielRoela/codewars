// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("")

function firstNonRepeatingLetter(s) {
    let test = s.split('').map(e => e.toLowerCase())
    let holdIndex = []
    test.forEach((e,i) => test.indexOf(e) === test.lastIndexOf(e) ? holdIndex.push(i) : 'we')
    
    if(holdIndex.length > 0){
      return s[holdIndex[0]]
    }else{
      return ''
    }
    
  }
// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    return string.split('').reduce((counter, char) => {
        if(char in counter){
            counter[char]++
        }else{
            counter[char] = 1
        }
        return counter
    },{})
  }
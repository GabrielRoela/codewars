// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

function repeatIt(str, n) {
    if(typeof str == "string"){
      let repeated = ''
      for(let i = 1; i<= n; i++){
        repeated += str
      }
      return repeated
    }else{
      return "Not a string"
    }
  }
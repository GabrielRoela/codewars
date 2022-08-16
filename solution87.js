// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw a RangeError

function factorial(n){
  
    if(n < 0 || n > 12){
      throw RangeError
    }
    
    let factorial = 1
    for(let i = n; i > 0; i--){
      factorial = factorial * i
    }
    
    return factorial
  }
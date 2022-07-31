// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


function validParentheses(parens) {
    let trigger = true
    let openCounter = 0
    let closedCounter = 0
    parens.split('').forEach(e => {
      if(e == '(' ){
        openCounter++
      }else{
        closedCounter++
      }
      if(closedCounter > openCounter){
        trigger = false
      }
    })
    if (openCounter != closedCounter){
      trigger = false
    }
    return trigger;
  }
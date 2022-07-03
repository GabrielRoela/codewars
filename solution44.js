// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
    let manipulate = name.toLowerCase().split('')
    manipulate[0] = manipulate[0].toUpperCase()
    
    return "Hello " + manipulate.join('') + "!"
  };
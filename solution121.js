// Description:
// Encrypt this!

// You want to create secret messages. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    let arr = text.split(' ')
    arr.forEach((e,i) => {
      if(e.length >= 3){
        arr[i] = String(e.charCodeAt(0)) + e[e.length - 1] + e.slice(2,-1) + e[1]
      }else if(e.length > 1){
        arr[i] = String(e.charCodeAt(0)) + e[1]
      }else{
        arr[i] = String(e.charCodeAt(0))
      }
    })
    return arr.join(' ')
  }
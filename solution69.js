// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let test = 'qwertyuiopasdfghjklzxcvbnm'
    let work = str.split('').reverse()
    let final = []
    work.forEach(e => test.includes(e) ? final.push(e) : 'we')
    return final.join('')
    
    
  }
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
    let test = '0123456789'
    let filtered = s.split('').filter(e => test.includes(e)).join('')
    return Number(filtered)
  }
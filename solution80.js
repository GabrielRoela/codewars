// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor(seconds % 3600 / 60)
    let newSeconds = seconds % 3600 % 60
    if(hours < 10){
      hours = '0' + hours.toString()
    }
    if(minutes < 10){
      minutes = '0' + minutes.toString()
    }
    console.log(newSeconds)
    if(newSeconds < 10){
      newSeconds = '0' + newSeconds.toString()
    }
    
    return hours + ':' + minutes + ':' + newSeconds
  }
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    console.log(str)
    let dataCheck = str.split('.')
    console.log(dataCheck)
    if(dataCheck.length != 4){
      return false
    }
    
    for(let i = 0; i<dataCheck.length; i++){
      if(+dataCheck[i] < 0 || +dataCheck[i] > 255){
        return false
      }
      
      if(dataCheck[i].length > 1 && dataCheck[i][0] == '0'){
  
        return false
      }
      
      let notNumberTrig = false
      let emptyShit = false
      let nums = '0123456789'
      dataCheck.forEach(e => {
        if(!e){emptyShit = true}
        e.split('').forEach(el => nums.includes(el) ? 'we' : notNumberTrig = true)})
      
      if(notNumberTrig){
        return false
      }
      
      if(emptyShit){
        return false
      }
      
      
    }
    
    return true
      
  }



  // interesting take:

//   function isValidIP(str) {
//     const octets = str.split('.')             // Split into octets
//     return (octets.length === 4) &&           // Ensure str has exactly 4 octets
//       octets.reduce((acc, octet) =>           // Check all octets
//         (acc === true) &&                       // Ensure prior octets okay
//         (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
//         (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
//         (Number(octet) <= 255)                  // Ensure octet is 255 or less
//       , true)
//   }
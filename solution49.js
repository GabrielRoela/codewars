//You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. 

function dup(s) {
    s.forEach((e,i) => {
      let working = e.split('')
      for(let i = 0; i < working.length; i++){
        if(working[i] == working[i+1]){
          working.splice(i + 1, 1)
          i--
        }
      }
      s[i] = working.join('')
    })
    return s
  };
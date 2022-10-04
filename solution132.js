// Given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"


function race(v1, v2, g) {
    let speedDifference = v2 - v1
    if (speedDifference < 1){
      return null
    }
  
  let secondsToCatch = g / speedDifference * 3600
  
  let hoursToCatch = Math.floor(secondsToCatch / 3600)
  
  let minutesToCatch = Math.floor( (secondsToCatch % 3600) / 60 )
  
  let restOfSeconds = Math.floor((secondsToCatch % 3600) % 60)
  
  return [hoursToCatch, minutesToCatch, restOfSeconds]
}
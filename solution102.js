// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  if(!str){
      return false
  }
  function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
  }
  
  let arr = str.split(' ').map(e => capitalize(e))
  if(!arr.join('')){
      return false
  }
  arr.unshift('#')
  let hashtagged = arr.join('')

  if(hashtagged.length > 140){
      return false
  }else{
      return hashtagged
  }
}
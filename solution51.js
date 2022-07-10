// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let sortedUp = Array.from(array, x => x).sort((a,b) => a-b)
    let sortedDown = Array.from(array, x => x).sort((a,b) => b-a)
    let triggerUp = true
    let triggerDown = true
    
    array.forEach((e,i) => e == sortedUp[i] ? 'we' : triggerUp = false)
    array.forEach((e,i) => e == sortedDown[i] ? 'we' : triggerDown = false)
    
    if(triggerUp){
      return 'yes, ascending'
    }else if(triggerDown){
      return "yes, descending"
    }else{
      return 'no'
    }
  }
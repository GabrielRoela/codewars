// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

function solve(a){
    let oddCount = 0
    let evenCount = 0
    a.forEach(e => {
      if(typeof e == 'number'){
        e % 2 == 0 ? evenCount++ : oddCount++
      }
    })
    return evenCount - oddCount
  };
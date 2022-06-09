// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let placeHolder = []
    let odds = []
    let gambiarra = 0
    
    array.forEach(e => {
      if(e % 2 == 0){
        placeHolder.push(e)
      }else{
        placeHolder.push(' ')
        odds.push(e)
      }
    } )
    
    odds.sort((a,b) => a-b)
    
    while(placeHolder.indexOf(' ') != -1){
        placeHolder[placeHolder.indexOf(' ')] = odds.shift()
    }

    return placeHolder
    
  }


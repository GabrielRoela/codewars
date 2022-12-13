// write a method that folds a given array of integers by the middle x-times. if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!


function foldArray(array, runs){
    let arr = Array.from(array)
    for(let i = 1; i <= runs; i++){
      if(arr.length === 1){
        return arr
      }
      
      if(arr.length % 2 === 0){
        let fold = arr.splice(arr.length / 2).reverse()
        arr = arr.map((e,i) => e + fold[i])
      }else{
        let fold = arr.splice(Math.ceil(arr.length / 2)).reverse()
        fold.forEach((e,i) => arr[i] += e)
      }
      
    }
    
    return arr
  }
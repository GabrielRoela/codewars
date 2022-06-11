// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:

// Input array

// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]
// Output array

// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]

function matrix(array) {
    let newManipulatedArr = []
      for (let i = 0; i < array.length; i++){
        let placeHolder = []
        for (let j = 0; j < array[i].length; j++){
          if(j == i){
            array[i][j] >= 0 ? placeHolder.push(1) : placeHolder.push(0)
          }else{
            placeHolder.push(array[i][j])
          }
        }
        newManipulatedArr.push(placeHolder)
      }
    return newManipulatedArr
  }
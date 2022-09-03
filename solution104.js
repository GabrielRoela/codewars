// DESCRIPTION:
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
    let testUpper = 'QWEERTYUIOPASDFGHJKLZXCVBNM'
    let arr = string.toString().split('')
    arr.forEach((e,i) => {
        if(testUpper.includes(e)){
            i == 0 ? arr[i] = e.toLowerCase() : arr.splice(i,1,`_${e.toLowerCase()}`)
        }
    })
    return arr.join('')
  }

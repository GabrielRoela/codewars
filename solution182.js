// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let odd = '13579'
    let arr = num.toString().split('')
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i])
      if(odd.includes(arr[i]) && odd.includes(arr[i + 1])){
        newArr.push('-')
      }
    }
   return newArr.join('')
 }
 
// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

var numberToPrice = function(number) {
    if(typeof number != 'number'){
      return "NaN"
    }
    let array = number.toString().split('.')

    if(array.length == 1){
        array[1] = '00'
    }

    if(array[1].length == 1){
        array[1] += '0'
    }

    if(array[1].length > 2){
        array[1] = array[1].slice(0,2)
    }


    array[0] = Number(array[0]).toLocaleString('en-US').toString()

    return array.join('.')

}


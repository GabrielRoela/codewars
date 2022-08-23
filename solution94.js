// Probability 101
// You will be given two numbers: length and num.

// A number with an amount of digits equal to length is chosen at random.

// NB: The random number of length length cannot start with zero if length > 1

// Some examples:

// if length is 1, there is 10 possible numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// if length is 2, the possible numbers will be all numbers from 10 up to 99

// if length is 3, the possible numbers will be all numbers from 100 up to 999

// Task
// Calculate the probability that the random number is a multiple of num.

// The returned value should be a floating point number, representing the probability in percentage.

// Examples:

// If there is no chance the random number will be a multiple of num you should return 0
// If it's certain the random number will be a multiple of num you should return 100
// If there is a 50% chance the random number will be a multiple of num you should return 50
// If there is a 4.1874% chance the random number will be a multiple of num you should return 4.1874
// As we are dealing with floating point numbers the tests take floating point approximation into account, the returned value needs to be exact +/- 1e-8

// Possible inputs:

// length will be an integer between 1 and 9
// num will be an integer between 1 and 1000
// Example:
// probability(1, 2)
// // output: 50
// Explanation:
// There are 10 numbers with length of 1 digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5 of them are multiples of 2 = [0, 2, 4, 6, 8]

// That means you should return 5/10 represented as a percentage = 50

// More examples:
// probability(2, 3)
// // output: 33.333333333333336
// probability(3, 22)
// // output: 4.555555555555555
// probability(9, 2201)
// // output: 0.04543388888888889

function probability(length, num){
    let min = []
    let max = []
    let counter = 0


    for(let i = 1; i <= length; i++){
        if(min.length == 0){
            min.push('1')
        }else{
            min.push('0')
        }
        max.push('9')
    }
    

    min = Number(min.join(''))
    max = Number(max.join(''))

    if(length == 1){
        min--
    }

    for(let i = min; i<=max; i++){
        i % num == 0 ? counter++ : 'we'
    }

    return counter / (max - min + 1) * 100
}

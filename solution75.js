//Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

//You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature,n){
    if( n == 0){
      return []
    }
    if(n < 3){
      let tribonacci = []
      for(let i = 0; i<n;i++){
        tribonacci.push(signature[i])
      }
      return tribonacci
    }
    let tribonacci = Array.from(signature)
    while(tribonacci.length < n){
      tribonacci.push(tribonacci[tribonacci.length - 1] + tribonacci[tribonacci.length - 2] + tribonacci[tribonacci.length - 3])
    }
    return tribonacci
  }
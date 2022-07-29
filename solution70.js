// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords = '') {
  let arr = title.split(' ')
  arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1).toLowerCase()
  for(let i = 1; i < arr.length; i++){
    if(!minorWords.toLowerCase().split(' ').includes(arr[i].toLowerCase())){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase()
    }else{
        arr[i] = arr[i].toLowerCase()
    }
  }
  return arr.join(' ')
}

console.log(titleCase('the quick brown fox'))
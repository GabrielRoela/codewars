// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransomNote(ransom, magazine){
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm '
    let ransomArr = ransom.split('').filter(e => alphabet.includes(e.toLowerCase())).join('').split(' ')
    let magazineArr = magazine.split('').filter(e => alphabet.includes(e.toLowerCase())).join('').split(' ')
    let magCount = {}
    let ransomCount = {}
    if(ransomArr.length > magazineArr.length){
        return false
    }

    for(let i = 0; i < magazineArr.length; i++){
        magCount[magazineArr[i]] = magCount[magazineArr[i]] + 1 || 1
        ransomArr[i] ? ransomCount[ransomArr[i]] = ransomCount[ransomArr[i]] + 1 || 1 : 'we'
    }

    let ransomWords = Object.keys(ransomCount)

    for(let i = 0; i < ransomWords.length; i++){
        if(ransomCount[ransomWords[i]] > magCount[ransomWords[i]] || magCount[ransomWords[i]] === undefined){
            return false
        }
    }

    return true
}
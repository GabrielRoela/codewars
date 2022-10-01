// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function consonantValue(s) {
    // trigger to check if the letter is a consonant or not
    let isConsonantTrigger
    // string to test for consonants (technically testing for !vowel)
    let vowels = 'aeiou'
    // this array will hold all the consonant strings
    let consonantStrings = []
    // this array will serve to work out if we push a single letter or a longer string of consonants
    let middleware = []

    s.split('').forEach(e => {
        // creating a state to know when to push new letters into our middleware and, more importantly, when to stop and clear it into our consonantStrings array
        if (!vowels.includes(e)) {
            isConsonantTrigger = true
        } else {
            isConsonantTrigger = false
        }
        // if a letter is a consonant, push it into the middleware
        if (isConsonantTrigger) {
            middleware.push(e)
        }
        // as long as consonants keep coming, we keep pushing to middleware and this checks if the substring made of ONLY consonants has ended
        if (!isConsonantTrigger && middleware.length > 0) {
            // whenever we detect a vowel we know that we should clear the middleware array so we can find the next consonantSubstring, for that we splice the array, and join all the consonants we found so far (that are between vowels, thanks to our isConsonantTrigger)
            consonantStrings.push(middleware.splice(0).join(''))
        }
    })
    // this here is important to make sure ht
    if (middleware.length > 0) {
        consonantStrings.push(middleware.splice(0).join(''))
    }
    // now we map our consonantStrings into their value, for this we get each substring, turn it into an array, get the charCodeAt of each, make sure to subtract 96 so we get the correct value (a = 1, b = 2.... z = 26) and add them up to get the total value of each substring
    let consonantStringsValue = consonantStrings.map(e => e.split('').reduce((acc,_,index,array) => {
        return acc + (array.join('').charCodeAt(index) - 96)
    },0))
    // last step we return the greater value in the array
    return consonantStringsValue.sort((a,b) => b-a)[0]
};


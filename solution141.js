// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

function pigLatin(word){
    let vowels = 'aeiou'

    if(vowels.includes(word[0].toLowerCase())){
        return word + 'way'
    }else{
        let firstVowel
        for(let i=0; i<word.length;i++){
            if(vowels.includes(word[i])){
                firstVowel = i
                break
            }
        }
        return word.slice(firstVowel) + word.slice(0,firstVowel) + 'ay'
    }
}
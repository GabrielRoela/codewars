// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {

    let characters1 = str1.split('').reduce((pv,cv) => {
        if(pv[cv]){
            pv[cv]++
        }else{
            pv[cv] = 1
        }
        return pv
    }, {})

    let characters2 = str2.split('').reduce((pv,cv) => {
        if(pv[cv]){
            pv[cv]++
        }else{
            pv[cv] = 1
        }
        return pv
    }, {})

    let trigger = true
    
    str2.split('').forEach(e => {
        if(characters1[e] < characters2[e] || !(e in characters1)){
            trigger = false
        }
    })

    return trigger
   }   
// Create a kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    let arrToWork = str.split('')
    //first, we clean the numbers
    let letters = 'qwertyuiopasdfghjklzxcvbnm'
    let numbers = '0123456789'
    //make sure we're not tripped by wstrings with more than 1 number
    while(arrToWork.find(e => numbers.includes(e))){
        arrToWork.forEach((e,i) => letters.includes(e.toLowerCase()) ? 'we' : arrToWork.splice(i,1))
    }
    //now swap each Uppercase letter with a dash + the lowercased version but we also make sure to not add a dash to the first word
    arrToWork.forEach((e,i) => {
        if(e === e.toUpperCase()){
            i > 0 ? arrToWork[i] = `-${e.toLowerCase()}` : arrToWork[i] = `${e.toLowerCase()}`
        }
    })

    return arrToWork.join('')
    
}
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let counted = arr.reduce((obj, cv) => {
      (cv in obj) ? obj[cv]++ : obj[cv] = 1
      return obj
    }, {})
    
    let counts = Object.values(counted).sort((a,b) => b-a)

    let highestRanks = []

    for(let num in counted){
        if(counted[num] == counts[0]){
            highestRanks.push(num)
        }
    }

    highestRanks.sort((a,b) => b-a)

    return highestRanks[0]


}


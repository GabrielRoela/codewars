 
// Transform array of arrays into array of objects
// [{ currency: [sell, buy] }] -> [{ usd: [100, 1500] }]
// If sell/buy of currency is repeating you should add them to the result of corresponding value
// For example:
// Input: [
// ["usd", "sell", 1000],
// ["usd", "sell", 1500],
// ]
// Output: [{ usd: [2500, 0] }]

const array = [
    ["usd", "sell", 1500],
    ["uah", "buy", 1000],
    ["usd", "sell", 500],
    ["aed", "buy", 300],
    ["usd", "buy", 500],
    ["uah", "buy", 3500],
    ["aed", "sell", 51],
    ];

function arrayOfCurrencies(arr){
    let bigObj = {}

    arr.forEach(e => {
        if(e[0] in bigObj){
            e[1] === 'sell' ? bigObj[e[0]][0] += e[2] : bigObj[e[0]][1] += e[2]
        }else{
            e[1] === 'sell' ? bigObj[e[0]] = [e[2],0] : bigObj[e[0]] = [0,e[2]]
        }
    })

    let arrOfObjects = []

    Object.keys(bigObj).forEach(e => arrOfObjects.push({[e]: [bigObj[e][0], bigObj[e][1]] }))

    return arrOfObjects
}
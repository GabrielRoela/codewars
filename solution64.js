//Write a function that sorts an array of numbers

function sortAnArray(arr){
    let sorted = []
    while(arr.length > 0){
        let checker = arr[0]
        for(let i = 1; i<arr.length; i++){
            if(arr[i] < checker){
                checker = arr[i]
            }
        }
        sorted.push(checker)
        arr.splice(arr.indexOf(checker),1)
    }
    return sorted
}
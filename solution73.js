// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str){
    let working = str.split('-')
    //making sure we dont get an empty element as our index 0 which would ruin the camelcalization lol
    while(!working[0]){
        working.shift()
    }
    working.forEach((e,i) => {
        if(i != 0){
            working[i] = e.slice(0,1).toUpperCase() + e.slice(1).toLowerCase()
        }
    })
    working[0] = working[0].toLowerCase()
    return working.join('')
}



// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, a, b){
    return arr.filter(e => e >= a && e <= b)
}

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){
    arr.forEach((e,i) => {
        if(e <= a || e >= b){
            arr.splice(i,1)
        }
    })
}

// Sort an array in decreasing order

function sortInDecreasingOrder(arr){
    arr.sort((a,b) => b-a)
}

// Write a function that creats a sorted copy of an array, but keep arr unmodified.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
    let sotredCopy = Array.from(arr).sort()
    return sotredCopy
}

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = Array.from(users, e => e.name) <<<<<< this was coded, not provided by challenge

// console.log(( names )); // John, Pete, Mary


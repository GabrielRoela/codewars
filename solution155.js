// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(str){
    arr = str.slice(str.indexOf('//') + 2).split('.')
    if(arr[0] === 'www'){
        return arr[1]
    }

    return arr[0]
}
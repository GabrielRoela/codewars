// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start,end){
    let ip1 = start.split('.')
    let ip2 = end.split('.')

    return (+ip2[0] * 256 ** 3 + +ip2[1] * 256 ** 2 + +ip2[2] * 256 + +ip2[3]) - (+ip1[0] * 256 ** 3 + +ip1[1] *256 ** 2 + +ip1[2] * 256 + +ip1[3])

}
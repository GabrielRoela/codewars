// Write a simple function to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
    let testStr = 'abcdefghijklmnopqrstuwxyz0123456789_'
    let trigger = true
    if(username.length > 16 || username.length < 4){
        trigger = false
    }
    username.split('').forEach(e => testStr.includes(e) ? 'w/e' : trigger = false)

    return trigger
}
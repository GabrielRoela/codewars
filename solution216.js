// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x){
    let map = {
        0: 'Clean!',
        1: 'Unicorn!',
        2: 'Homer!',
        3: 'Careless!',
        4: 'Careless!',
        5: 'Careless!',
    }
    
    return ['-'.repeat(x.length), map[x.split('').filter(e => e === '/').length] || "Hobo!"]
  }
// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white","yellow","purple","red" when instantiated


    class Ghost{
      constructor(){
        let random = Math.ceil(Math.random() * 4)
        let hash = {
          1: 'white',
          2: 'yellow',
          3: 'purple',
          4: 'red',
        }
        this.color = hash[random]
      }
    }


    ghost = new Ghost();
    console.log(ghost.color) //=> "white" or "yellow" or "purple" or "red"

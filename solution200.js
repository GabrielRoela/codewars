// Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

// Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

function upsidablesInRange(x, y) {
    function isUpsidable(number){
        let dataManip = number.toString().split('')
        let upsidables = '01689'
        let dataReversed = dataManip.map(e => {
            if(e === '6'){
                return '9'
            }else if (e === '9'){
                return '6'
            }else{
                return e
            }
        }).reverse()

  
        for(let i = 0; i < dataManip.length; i++){
            if(dataManip[i] !== dataReversed[i] || !upsidables.includes(dataManip[i])){
                return false
            }
        }
  
        return true
    }
    
        let counter = 0
      for(let i = x; i < y; i++){
          if(isUpsidable(i)){
              counter++
          }
      }
  
      return counter
  }
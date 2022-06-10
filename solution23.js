// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
    let map = {
      'X': "Congratulations! You're going to have a daughter.",
      'Y': "Congratulations! You're going to have a son."
    }
    
    return map[sperm[1]]
  }

  function chromosomeCheck2(sperm) {
    return sperm.includes('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
  }


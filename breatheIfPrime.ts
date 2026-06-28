function determinePrime(num:number) {
  for(let i:number=2;i<=num**.5;i++) {
      if(num % i === 0 && num > 1) {
          return false
      }
  }
  return true
}

function determineBipScore(gameLength:number, maxLungCapacity:number, breathRegen:number) {
    let numbers:number[] = []
    for(let i:number=1;i<gameLength+1;i++) {
        numbers.push(i)
    } // get list of primes
    let primeNumbers:number[] = numbers.filter((i) => determinePrime(i))

    let currentLungCapacity:number = maxLungCapacity
    let score:number = 0

    for(let i:number=1;i<gameLength+1;i++) {
        currentLungCapacity--
        if(i===primeNumbers[0]) {
            primeNumbers.shift()
            currentLungCapacity++
            currentLungCapacity = Math.min(maxLungCapacity, currentLungCapacity+breathRegen)
        }
        
        if(currentLungCapacity === 0) {
            score = i
            break
        }
    }

    if(score===0) return `MLC: ${maxLungCapacity}, BR: ${breathRegen}, THIS PLAYER BEAT THE GAME.`
    else return `MLC: ${maxLungCapacity}, BR: ${breathRegen}, SCORE: ${score}`
}

console.log(determineBipScore(100, 4, 4))
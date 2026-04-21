function handshakesAround(churchSeats, xIndex, yIndex) {
    let score = 0
    for(let y=-1;y<2;y++) {
        for(let x=-1;x<2;x++) {
            if(churchSeats[yIndex+y] && (x !== 0 || y !== 0)) { // first condition tests if its a valid, second one tests if it isnt the same seat
                if(churchSeats[yIndex+y][xIndex+x] === "o") {
                    score++
                }
            }
        }
    }
    return score
}

function misa(R, S, churchSeats) {
    let handshakesArray = []
    let possibleSeats = []
    
    let maxSitScore = 0
    let currentSeatIndex = [0, 0]

    churchSeats.forEach((row, yIndex) => {
        let outputRow = []   
        row.forEach((seat, xIndex) => {
            if(seat === ".") {
                let score = handshakesAround(churchSeats, xIndex, yIndex)
                if(score > maxSitScore) {
                    maxSitScore = score
                    currentSeatIndex[0] = xIndex
                    currentSeatIndex[1] = yIndex
                }
            }
        })
    })
    churchSeats[currentSeatIndex[1]][currentSeatIndex[0]] = "o"

    let output = 0

    churchSeats.forEach((row, yIndex) => {
        let outputRow = []
        row.forEach((seat, xIndex) => {
            if(seat === "o") {
                output += (handshakesAround(churchSeats, xIndex, yIndex)/2)
            }
        })
    })
    return output
}

let churchSeats = [
    ['o', 'o'],
    ['o', 'o']
]

/*

O(R*S)

*/

console.log(misa(churchSeats.length, churchSeats[0].length, churchSeats))
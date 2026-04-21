function ogRoomCleaning(n, room) {
    room.sort((a, b) => a[1] - b[1])
    for(let i=0;i<n-1;i++) {
        if(room[i][room[i][0]] > room[i+1][1]) { 
            if(room[i][1] !== (room[i+1][1])) { 
                return "NO" 
            } else if (room[i+1][room[i+1][0]] > room[i][1]) { 
                [room[i], room[i+1]] = [room[i+1], room[i]]
                return "NO"
            }
        }
    }
    return "YES"
}

let room = [
    [3, 7, 7, 7],
    [1, 1],
    [3, 1, 2, 5],
]

function roomCleaning(n, room) {
    let allSorted = true
    room.forEach((box) => {
        box.shift()
        for(let i=1;i<box.length;i++) if(box[i-1] > box[i]) allSorted = false
    })
    if(!allSorted) return "NO"

    let outputList = room[0]
    room.shift()

    room.forEach((box) => {
        if(outputList[0] >= box[box.length-1]) box.reverse().forEach((el) => outputList.unshift(el))
        else if (outputList[outputList.length-1] <= outputList[0]) box.forEach((el) => outputList.push(el)) 
        else return "NO"
    })
    return "YES"
}

console.log(roomCleaning(room.length, room))
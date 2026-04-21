function roomCleaning(n, room) {
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

/* 
 lines 9-10 are largely unnecessary and solve a 
 specific error i fear exists with sort

 basically if the first index values are the same and the sort doesnt work without that conditional
 you are unsure if you could align it differently and fix it

 for example, in the data i created, if you put the first array first, then it doesnt work
 but you could put the second array first instead and fix it
*/

console.log(roomCleaning(room.length, room))
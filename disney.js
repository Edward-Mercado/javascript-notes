const ridesData = [
    {
        name: "Haunted Mansion",
        start: 60,
        end: 120, 
        slots: 10
    },
    {
        name: "Space Mountain",
        start: 130,
        end: 180, 
        slots: 10
    },
    {
        name: "Splash Mountain",
        start: 200,
        end: 250, 
        slots: 10
    },
    {
        name: "Big Thunder",
        start: 300,
        end: 350, 
        slots: 10
    },
    {
        name: "TRON",
        start: 400,
        end: 450, 
        slots: 10
    },
]

const guestsData = [
    {
        name: "Edward",
        groupSize: 7,
        wishlist: ["Haunted Mansion", "Space Mountain", "TRON"],
    },
    {
        name: "Crystal",
        groupSize: 8,
        wishlist: ["Splash Mountain", "Big Thunder", "TRON"],
    },
    {
        name: "Humd",
        groupSize: 3,
        wishlist: ["Space Mountain", "Haunted Mansion", "Big Thunder"],
    },
]

function fitsSize(guest, ride) {
    if(ride.slotsLeft >= guest.groupSize) {
        return true
    } return false
}

function timeGood(guest, ride) {
    let valid = true
    guest.output.forEach((placedRide) => {
        if(!(placedRide.start > ride.end) && !(placedRide.end < ride.start)) {
            valid = false
        } 
    })
    return valid
}

function bookAllGuests(inputRides, inputGuests) {
    let rides = inputRides
    rides.forEach((ride) => {
        ride.slotsLeft = ride.slots
    })

    let guests = inputGuests.filter((guest) => guest.wishlist.length <= 3)
    guests.forEach((guest) => {
        guest.output = []
    })

    guests.forEach((guest) => {
        guest.wishlist.forEach((wishRide) => {
            let ride = rides.find(ride => ride.name === wishRide)
            if (ride) {
                if(fitsSize(guest, ride) && timeGood(guest, ride)) {
                    ride.slotsLeft -= guest.groupSize
                    guest.output.push(ride)
                }
            }
        })
    })

    let output = {}
    guests.forEach((guest) => {
        let guestRides = []
        guest.output.forEach((ride) => {
            guestRides.push(ride.name)
        })

        output[guest.name] = guestRides
    })

    console.log(output)
}

bookAllGuests(ridesData, guestsData)
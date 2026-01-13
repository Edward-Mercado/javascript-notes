publishers = {};
const videoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        studio: "Nintendo",
        yearReleased: 2017,
        genre: ["Action-Adventure", "Open World"],
        platforms: ["Nintendo Switch", "Wii U"],
        mainCharacters: [
            { name: "Link", role: "Hero" },
            { name: "Zelda", role: "Princess" },
        ],
        ratings: {
            metacritic: 97,
            igdb: 96,
        },
    },
    {
        title: "God of War",
        studio: "Santa Monica Studio",
        yearReleased: 2018,
        genre: ["Action", "Adventure"],
        platforms: ["PlayStation 4", "PlayStation 5", "PC"],
        mainCharacters: [
            { name: "Kratos", role: "Protagonist" },
            { name: "Atreus", role: "Companion" },
        ],
        ratings: {
            metacritic: 94,
            igdb: 93,
        },
    },
    {
        title: "Minecraft",
        studio: "Mojang Studios",
        yearReleased: 2011,
        genre: ["Sandbox", "Survival"],
        platforms: ["PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile"],
        mainCharacters: [
            { name: "Steve", role: "Player Avatar" },
            { name: "Alex", role: "Player Avatar" },
        ],
        ratings: {
            metacritic: 93,
            igdb: 96,
        },
    },
    {
        title: "Elden Ring",
        studio: "FromSoftware",
        yearReleased: 2022,
        genre: ["Action RPG", "Open World"],
        platforms: ["PC", "PlayStation", "Xbox"],
        mainCharacters: [
            { name: "Tarnished", role: "Player Character" },
            { name: "Melina", role: "Guide" },
        ],
        ratings: {
            metacritic: 96,
            igdb: 95,
        },
    },
    {
        title: "Fortnite",
        studio: "Epic Games",
        yearReleased: 2017,
        genre: ["Battle Royale", "Shooter"],
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
        mainCharacters: [
            { name: "Jonesy", role: "Hero Skin" },
            { name: "Peely", role: "Comedy Skin" },
        ],
        ratings: {
            metacritic: 81,
            igdb: 83,
        },
    },
    {
        title: "Super Mario Odyssey",
        studio: "Nintendo",
        yearReleased: 2017,
        genre: ["Platformer", "Adventure"],
        platforms: ["Nintendo Switch"],
        mainCharacters: [
            { name: "Mario", role: "Hero" },
            { name: "Cappy", role: "Companion" },
        ],
        ratings: {
            metacritic: 97,
            igdb: 94,
        },
    },
    {
        title: "Red Dead Redemption 2",
        studio: "Rockstar Games",
        yearReleased: 2018,
        genre: ["Action", "Adventure", "Open World"],
        platforms: ["PC", "PlayStation", "Xbox"],
        mainCharacters: [
            { name: "Arthur Morgan", role: "Protagonist" },
            { name: "Dutch van der Linde", role: "Gang Leader" },
        ],
        ratings: {
            metacritic: 97,
            igdb: 96,
        },
    },
    {
        title: "Overwatch",
        studio: "Blizzard Entertainment",
        yearReleased: 2016,
        genre: ["Shooter", "Team-Based"],
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mainCharacters: [
            { name: "Tracer", role: "Damage" },
            { name: "Reinhardt", role: "Tank" },
        ],
        ratings: {
            metacritic: 91,
            igdb: 88,
        },
    },
    {
        title: "The Witcher 3: Wild Hunt",
        studio: "CD Projekt Red",
        yearReleased: 2015,
        genre: ["Action RPG", "Open World"],
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mainCharacters: [
            { name: "Geralt of Rivia", role: "Witcher" },
            { name: "Ciri", role: "Princess / Witcher-in-Training" },
        ],
        ratings: {
            metacritic: 93,
            igdb: 95,
        },
    },
    {
        title: "Animal Crossing: New Horizons",
        studio: "Nintendo",
        yearReleased: 2020,
        genre: ["Simulation", "Social"],
        platforms: ["Nintendo Switch"],
        mainCharacters: [
            { name: "Player Villager", role: "Island Resident" },
            { name: "Tom Nook", role: "Island Manager" },
        ],
        ratings: {
            metacritic: 90,
            igdb: 87,
        },
    },
];

function displayMostPublisher() { //display the publisher with the most games
    const publishers = []

    videoGames.forEach((game) => { // for each game,
        // see if we already logged this publisher
        // if we did, increment their count by one
        // if not, put a new entry as their list

        // i put what this should output underneath this function

        if (publishers.find((publisher) => publisher.name === game.studio)) { // if we find the game in the publishers list we made
            publishers.find((publisher) => publisher.name === game.studio).quantity += 1 // we add one to their quantity
        } else { // if its not in the list of publishers we have already logged
            publishers.push({
                name: game.studio,
                quantity: 1,
            }) // make a new list
        }
    })

    publishers.sort((a, b) => b.quantity - a.quantity) // sort it, having the ones with the highest quantity first

    document.querySelector(".publishers").insertAdjacentHTML("afterbegin", `
        <h2> Publisher: ${publishers[0].name} </h2>
        <h2> Games Produced: ${publishers[0].quantity} </h2>
        `)
    // publishers[0] is the first one in the list, or the one with the highest quantity
}
// calling this for the test would be:
// displayMostPublisher()

const samplePublishers = [
    { name: "Nintendo", quantity: 3 },
    { name: "Santa Monica Studio", quantity: 1 },
    { name: "Mojang Studios", quantity: 1 },
    { name: "FromSoftware", quantity: 1 },
    { name: "Epic Games", quantity: 1 },
    { name: "Rockstar Games", quantity: 1 },
    { name: "Blizzard Entertainment", quantity: 1 }
]
// notice we have each publisher and the number of games they made here
// as we run through the function, we either put a new object w the publisher name and quantity, or we add to the quantity of an existing object

function displayAllGames(publisherName) { // display all nintendo games (i abstracted and allowed an input for the publisher bc im extra)
    document.querySelector(".publishers").insertAdjacentHTML("afterbegin", `
        <h2> Publisher: ${publisherName} </h2>
    `)

    let gamesDiv = document.querySelector(".games")
    gamesDiv.insertAdjacentHTML("afterbegin", `
        <h2> Here are the games they made: </h2>
        `)

    videoGames.forEach((game) => { // for each game, if they have the desired publisher, we put it on the screen
        if (game.studio === publisherName) {
            gamesDiv.insertAdjacentHTML("beforeend", `
                <h3> Game Name: ${game.title} </h3>
                `)
        }
    })
}
// calling this for the test would be:
// displayAllGames("Nintendo")

function metacriticRequirement(requirement) { // "display all games with a metacritic over 9" (i abstracted and allowed an input for the requirement bc im extra)
    let requirementMetGames = videoGames.filter((game) => game.ratings.metacritic > requirement)
    // filter the videogames based on which games have a metacritic rating > the requirement we put in

    let gamesDiv = document.querySelector(".games")
    requirementMetGames.forEach((game) => { // all the games that meet the requirement, load em on
        gamesDiv.insertAdjacentHTML("beforeend", `
            <h2> ${game.title}: ${game.ratings.metacritic} </h2>
            `)
    })
}
// calling this for the test would be:
// metacriticRequirement(9)
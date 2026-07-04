async function getAPIshit() {
    let quote = await fetch('https://thequoteshub.com/api/random-quote')
    .then(async (response) => {
        let quoteJSON = await response.json()
        console.log(quoteJSON)
    })
}

async function getMoreAPIshit() {
    let quote = await fetch('https://random-word-api.herokuapp.com/word?number=42&lang=de')
    .then(async (response) => {
        let quoteJSON = await response.json()
        console.log(quoteJSON)
    })
}

getMoreAPIshit()
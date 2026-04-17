import { setTimeout } from 'timers/promises';


let sisyphus = {
    mountain: ["boulder"]
}

let index = 0

while(index !== sisyphus.mountain.length) {
    sisyphus.mountain.push("boulder")
    index++
    let event = Math.random()
    if(event > 0.95) {
        sisyphus.mountain.length = 1
        index = 0
        console.log("The boulder rolled down the hill.")
    } else if (event < 0.2) {
        console.log("Pushing...")
    }
    await setTimeout(2000)
}

console.log("The boulder has been rolled up the hill.")
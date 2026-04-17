let sisyphus = {
    mountain: ["boulder"]
}

let index = 0

while(index !== sisyphus.mountain.length) {
    sisyphus.mountain.push("boulder")
    index++
    if(Math.random() > 0.99) {
        sisyphus.mountain.length = 1
        index = 0
    }
}

console.log("The boulder has been rolled up the hill.")
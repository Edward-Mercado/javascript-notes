function rInName(name: string) {
    name.split("").forEach((char: string) => {
        if(char.toLowerCase() === 'r') {
            console.log("NOOOOOOO")
        }
    })
}

rInName("Hikaru Nakamura")
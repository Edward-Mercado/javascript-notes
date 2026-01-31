function HelloWorld(func, args) {
    if(["console.log", "print"].find((line) => line === func)) {
        if(!args) {
            console.log("Hello World")
        } else {
            console.log("Hello World"[additional.printIndex])
        }
    } 
    
    else if(func === "for loop") {
        if(!args) {
            for(let i=0;i<11;i++) {
                console.log("Hello World"[i])
            }
        } else {
            for(let i=0;i<args.range;i++) {
                console.log("Hello World"[i])
            }
        }
    } 
    
    else if (func === "while loop") {
        if(!args) {
            while(true) {
                console.log("Hello World")
            }
        } else {
            if(args.condition.type === "index value") {
                let conditionalIndex = args.condition.value
                let usedIndex = 0
                while(usedIndex<=conditionalIndex) {
                    console.log("Hello World"[usedIndex])
                    usedIndex++
                }
            } else if(args.condition.type === "match character") {
                let characterTarget = args.condition.value
                let conditionalMet = false
                let usedIndex = 0
                while(!conditionalMet) {
                    console.log("Hello World"[usedIndex])
                    usedIndex++
                    if("Hello World"[usedIndex - 1] === characterTarget) {
                        conditionalMet = true
                        break
                    }
                }
            }
        }
    }

    else if(func === "assign variable") {
        return "Hello World"
    }

    else if(func === "length") {
        console.log(11)
    }

    else if(func === "type of") {
        console.log("String")
    }

    else if(func === "find") {
        if(args) {
            let searchTarget = args.searchTarget
            let helloWorldArray = []
            for(let i=0;i<11;i++) {
                helloWorldArray.push("Hello World"[i])
            }

            console.log(helloWorldArray.find((char) => char === searchTarget))
        }
    }

    else if (func === "random character") {
        let value = Math.floor(11*Math.random())
        console.log("Hello World"[value])
    }
}

HelloWorld("random character")
function countingUniquePairs(S, array) {
    let output = 0;
    let workingPairs = []
    array.forEach((number) => {
        let substituteArray = []
        array.forEach((el) => {substituteArray.push(el)});

        let arrayIndex = array.indexOf(number);
        substituteArray.splice(0, arrayIndex+1);

        substituteArray.forEach((pairedNumber) => {
            if (number+pairedNumber === S) {
                let found = false;
                let reverseFound = false;
                workingPairs.forEach((pair) => {
                    if(pair[0] === number) {
                        found = true;
                    }
                    if(pair[1] === number) {
                        reverseFound = true;
                    }
                })

                if (!found && !reverseFound) {
                    workingPairs.push([number, pairedNumber]);
                    output++;
                }
            }
        })
    })
    console.log(output);
}

function longestConsecutiveRun(string) {
    let highScore = 0;
    currentScore = 0;
    for(let i=0;i<string.length;i++) {
        if(string[i] === string[i+1]) {
            currentScore ++;
        }
        else {
            currentScore = 0;
        }
        if (currentScore > highScore) {
            highScore = currentScore;
        }
    }
    highScore++;
    console.log(highScore);
}

function sumUntilNegative(numArray) {
    let negativeFound = false;
    let currentIndex = 0;
    let sum = 0
    while(!negativeFound) {
        let newNum = numArray[currentIndex];
        if (newNum>=0) {
            sum+= newNum;
            currentIndex++;
        }
        else {
            negativeFound = true;
        }
    }
    console.log(sum)
}

function weirdNumberTransform(num) {
    let stringNum = num.toString().split("")
    let counter = 0;

    stringNum.forEach((letter) => {
        let digit = Number(letter);
        if (digit%2 === 0) {
            if(digit === 0) {
                counter*=2;
            }
            else {
                counter+=digit;
            }
        }
        else {
            counter-=digit;
        }
    })
    console.log(counter);
}
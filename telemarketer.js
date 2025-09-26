function isTelemarketer(digit_1, digit_2, digit_3, digit_4) {
    let telemarketer = false
    if (digit_1 === 8 || digit_1 === 9) {
        if (digit_4 === 8 || digit_4 === 9) {
            if (digit_2 === digit_3) {
                telemarketer = true
            }
        }
    }

    if (telemarketer === true) {
        console.log("ignore")
    }
    else {
        console.log("answer")
    }
}
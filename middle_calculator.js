function middle(weight_1, weight_2, weight_3) {
    if (compare(weight_1, weight_2) !== compare(weight_1, weight_3)) {
        console.log(weight_1)
    }
    else if (compare(weight_2, weight_1) !== compare(weight_2, weight_3)) {
        console.log(weight_2)
    }
    else {
        console.log(weight_3)
    }
}
    function compare(weight_1, weight_2) {
        if (weight_1 > weight_2) {
            return true
        }
        else if (weight_1 < weight_2) {
            return false
        }
        else {
            return "equal"
        }
    }

function short_middle(weight_1, weight_2, weight_3) {
    const weights = [weight_1, weight_2, weight_3];
    weights.sort();
    console.log(weights[1])
}

short_middle(105, 100, 10)
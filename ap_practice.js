let els = [1, 1, 3, 7, 5]

function checkValidity(value) {
    return value % 2
}

function checkAll(values) {
    for(let value of values) {
        if(!checkValidity(value)) {
            return false
        }
    }
    return true
}

console.log(checkAll(els))
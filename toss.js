let total = 0;
function sumOfDigits(number) {
    const numString = Math.abs(number).toString().split("");
    let sum = 0;
    numString.forEach((num) => {
        sum += Number(num)
    })
    return sum;
}

function isPrime(num) {
    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function problemFunction(number) {
    if (!isPrime(number)) {
        return 0;
    }
    else if (isPrime(number) && !isPrime(sumOfDigits(number))) {
        return 83;
    }
    else if (isPrime(number) && isPrime(sumOfDigits(number))) {
        return sumOfDigits(number);
    }
}

for (let i = 101; i < 1000; i++) {
    if (problemFunction(problemFunction(i)) === 11) {
        total++
    }
}
console.log(total);
function checkMin(score, checkScores) {
    checkScores.forEach((checkScore) => {
        console.log('min', checkScore, score);
        if(checkScore <= score) {
            return 0;
        }
    })
    return 1;
}

function checkMax(score, checkScores) {
    checkScores.forEach((checkScore) => {
        console.log('max', checkScore, score);
        if(checkScore >= score) {
            return 0;
        }
    })
    return 1;
}

function sportsBall(scores) {
    let min = 0;
    let max = 0;
    let previousScores = [];
    scores.forEach((score) => {
        if (previousScores.length !== 0) {
            min += checkMin(score, previousScores);
            max += checkMax(score, previousScores);
        }
        previousScores.push(score);
    })
    console.log(`min: ${min} max: ${max}`);
}

sportsBall([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
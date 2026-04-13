const t9 = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

function reverseMap(object) {
    let outputMap = {}
    Object.keys(object).forEach((key) => {
        [...object[key]].forEach((letter) => {
            outputMap[letter] = key
        })
    })
    return outputMap
}   

function marko(N, words, S) {
    let outputMap = reverseMap(t9)
    let incorrect = 0
    const vWords = words.filter((word) => word.length === S.length)
    vWords.forEach((word) => {
        for(let i=0;i<word.length;i++) {
            if(outputMap[[...word][i]] === S[i]) { continue } 
            else { incorrect++; break }
        }
    })
    console.log(vWords.length - incorrect)
}

marko(3, ['mono', 'nomo', 'npo', 'mm'], '6666')
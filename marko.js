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

function marko(N, words, S) {
    let incorrect = 0
    const vWords = words.filter((word) => word.length = S.length)
    vWords.forEach((word) => {
        for(let i=0;i<word.length;i++) {
            if([...(t9[S[i]])].includes([...word][i])) { continue } 
            else { incorrect++; break }       
        }
    })
    console.log(vWords.length - incorrect)
}

marko(3, ['mono', 'nomo', 'npo'], '6666')
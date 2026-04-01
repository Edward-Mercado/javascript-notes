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
    let validWords = 0

    words.forEach((word, index) => {
        let bad = false;

        [...word].forEach((char) => {
            if (!t9[S[index]].includes(char)) {
                bad = true
            }
        }) 

        if(!bad) {
            validWords++
        }
    })
    console.log(validWords)
}

marko(3, ['mono', 'nomo', 'npo'], '6666')
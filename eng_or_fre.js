function english_or_french(line_count, text) {
    let t_count = 0;
    let s_count = 0;
    for(i=0;i<line_count;i++) {
        let line = text[i];
        
        for(j=0;j<line.length;j++) {
            let char = line[j].toLowerCase();

            if(char === "t") {
                t_count += 1;
            }
            else if(char === "s") {
                s_count += 1
            }
        }
    }

    if(t_count > s_count) {
        console.log("English");
    }
    else {
        console.log("French");
        if (t_count === s_count) {
            console.log("probably?");
        }
    }
}

text = [];
line_count = text.length();

english_or_french(3, ["Lorsque j'avais six ans j'ai vu, une fois,","une magnifique image,", "dans un livre"]);
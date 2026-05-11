interface person {
    name: string,
    favorite: string,
    age: number,
    awesome: boolean,
    likes: (string | number | person)[]
}


let edward:person = {
    name: "edward",
    favorite: "humd",
    age: 15,
    awesome: true,
    likes: ['sleepin', 'kickin', 'nappin', 15, {
        name: 'a',
        age: 10,
        favorite: 'b',
        awesome: false,
        likes: []
    }]
}

let alphabet:string[] = ['a', 'b', 'c']
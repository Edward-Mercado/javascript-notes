function sum(arg) {
    let sum=0
    arg.forEach((el) => {sum+=el})
    return sum
}

console.log(sum([32,143,32,18,41,35,130,76,13,25,17,59,20,14,234]))
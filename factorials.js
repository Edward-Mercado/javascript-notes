let sum = 0

for (let i=0;i<2027;i++) {
    sum += Math.floor(i/5) + Math.floor(i/25) + Math.floor(i/125) + Math.floor(i/625);
}
console.log(sum)
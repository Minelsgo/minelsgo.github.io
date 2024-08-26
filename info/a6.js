einmal1 = [[]]
for (let i1 = 0; i1 < 11; i1 ++) {
    einmal1[i1]=[]
    for (let i2 = 0; i2 < 11; i2++) {
        einmal1[i1][i2] = i1*i2
    }
}
console.log(einmal1)
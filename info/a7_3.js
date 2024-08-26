n = 15
haus = []
haus[0]=[]
for (let ii = 0; ii < n; ii++) {
    haus[0][ii] = "*"
}
for (let i = 1; i < n-1; i++) {
    haus[i]=[]
    for (let ii = 0; ii < n; ii++) {
        haus[i][ii] = " "
    }
    haus[i][n-1]="*"
    haus[i][0]="*"
}
haus[n-1]=[]
for (let ii = 0; ii < n; ii++) {
    haus[n-1][ii] = "*"
}
console.log(haus)
console.log()
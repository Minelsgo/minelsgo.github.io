n = 10
haus = []
for (let i = 0; i < n; i++) {
    haus[i]=[]
    for (let ii = 0; ii < n*2-1; ii++) {
        haus[i][ii] = " "
    }
    haus[i][n-1-i]="*"
    haus[i][n-1+i]="*"
}
console.log(haus)
console.log()
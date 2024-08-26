n = 9
haus = []
for (let i = 0; i < n; i++) {
    haus[i]=[]
    for (let ii = 0; ii < n; ii++) {
        haus[i][ii] = " "
    }
    haus[i][i]="*"
}
console.log(haus)
console.log()
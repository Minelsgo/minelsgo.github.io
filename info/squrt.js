sqrt=7
start = 0
r = sqrt
while (Number((r**2).toFixed(2)) != sqrt){
    if (sqrt < (r**2)){
        end = r
    }
    if (sqrt > r**2){
        start = r
    }
    r = start+0.5*(end-start)
}
console.log(r.toFixed(2))
console.log(r**2)
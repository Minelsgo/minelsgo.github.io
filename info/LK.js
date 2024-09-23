function f(x){
    return x**2
}
start = 1
end = 5

A = 0
y1 = f(start)
for (let i = start+.1; i <= end; i+=.1) {
    y2 = f(i)
    if (y1<y2){
        A += .1*(y1+.5*(y2-y1))
    }
    if (y2<y1){
        A += .1*(y2+.5*(y2-y1))
    }
    y1 = f(i)
}
console.log(A)



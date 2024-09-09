inputf = "3 * x^2 + 2"
begin = 0
end = 8
inputf = inputf.replace(/\^/g, '**')
calculateY = new Function('x', 'return ' + inputf)
A = 0
y1 = calculateY(begin)
for (let i = begin+0.1; i <= end; i+=0.1) {
    y2 = calculateY(i)
    if (y2 >= y1){
        y = y1 + 0.5*(y2-y1)
    }
    if (y2 < y1){
        y = y2 + 0.5*(y1-y2)
    }
    A += 0.1*y
    y1 = calculateY(i)
}
console.log(A)
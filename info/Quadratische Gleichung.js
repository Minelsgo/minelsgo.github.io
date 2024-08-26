a =4
b = 100
c = 2
d = (b^2)-(4*a*c)
if (d < 0){
    console.log("Es gibt keine Lösung")
}
if (d == 0){
    console.log("x=",-b/2*a)
}
if (d > 0){
   console.log("x1=",-b + Math.sqrt(d)/2*a)
   console.log("x2=",-b - Math.sqrt(d)/2*a)
}
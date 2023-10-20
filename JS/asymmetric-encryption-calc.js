//var elog;
/*function LOG(msg) {
    elog += msg + "\n"
    document.getElementById("debug-output").innerHTML = elog;
}*/
var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
};
console.log(gcd(15,7));
console.log(3.5%1);
console.log("Hello World");
console.log(Math.floor(4.7));
setInterval(main, 1);
function main(){
    console.log(calc(19,37,41))
    
    console.log("f");
}
var calc=function(p, q, e) {
    if (p%1!=0||q%1!=0||e%1!=0) {
        return "Alle Zahlen müssen ganze Zahlen sein!"
    }
    var N = p * q;
    var phi = (p-1)*(q-1);
    if (gcd(phi, e)!=1){
        return "e ist ein gmeinsames viefaches von phi wähle andere Werte"
    }
    var c1 = [[phi, Math.floor(phi/e),e,phi%e]];
    var count = 0;
    while(c1[count][3]!=1){
        count += 1;
        c1[count]=[c1[count-1][2],Math.floor(c1[count-1][2]/c1[count-1][3]),c1[count-1][3],c1[count-1][2]%c1[count-1][3]]
    }
    if (c1.length>1){
        var c2 = []
    }
    return "f";
}
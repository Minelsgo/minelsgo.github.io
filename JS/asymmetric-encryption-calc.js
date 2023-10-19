var elog;
function LOG(msg) {
    elog += msg + "\n"
    document.getElementById("debug-output").innerHTML = elog;
}
var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
};
console.log(gcd(15,7));
console.log("Hello World");

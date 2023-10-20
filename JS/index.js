console.clear();
console.log("Auf zum Koten");
let input = "prompt("+"Bitte Koten"+")"
if(input === 'nö'){
    console.log("als ob das nicht so geht") 
}
function Kotenlernenistwichtig(input){
    if(input === 'nö'){
        console.log("verpisss dich du kleiner HS");
    }
}
Kotenlernenistwichtig(input);
const qualitätdieserwebseite = 'beschissen';
// const wiebeschissenistdiesewebseite = true;
let wasauchimmerdasistwasichhiergeradedefiniere = {
    a:1,
    b:"a",
    c:false

};
let e = 3;
console.log('Halloööööle');
console.log("1");
e = 5;
console.log(e);
console.log('Diese Webseite ist echt '+qualitätdieserwebseite+' und das lässt sich auch nucht ändern!');
console.log(wasauchimmerdasistwasichhiergeradedefiniere.c);
var array = ['Python','JS','Java','PHP','C#'];
console.log(array[1]);
array.push("Redstone");
console.log(array[5]);

function f(x){
    return 3*x-5;
}
for (let index = -10; index < 11; index++) {
    console.log("f("+index+")="+f(index));
    console.log(e);
    
}
array.pop();
console.log(array);
var waffel = Infinity*Infinity;
console.log(waffel);
setInterval(calc, 1)
function calc() {
    var v1=Number(document.querySelector("#v1").value)
    var v2=Number(document.querySelector("#v2").value)
    var result=NaN;
    switch (readradio("op")){
        case "Add": result=v1+v2; break;
        case "Sub": result=v1-v2; break;
        case "Mul": result=v1*v2; break;
        case "Div": result=v1/v2; break;
        case "Pot": result=v1**v2; break;
    }
    if (!isNaN(result)){
        document.getElementById("result").innerHTML = result;
    }else{
        document.getElementById("result").innerHTML = "";
    }
    



}
function readradio(name){
    var arrayofradios=document.getElementsByName(name);
    for (let i = 0; i < arrayofradios.length; i++) {
        if (arrayofradios[i].checked){
            return arrayofradios[i].value;
        }
        
    }
}

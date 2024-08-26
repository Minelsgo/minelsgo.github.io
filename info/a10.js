function start(){
    z = Math.floor(Math.random()*document.getElementById("max").value)
    v = 0
    document.getElementById("o").innerHTML = ""
    document.getElementById("prompt").innerHTML = 'Versuch 1: <input id="input" type="number" onkeydown="if(event.keyCode == 13) { submit(); }"> &nbsp; <button onclick="submit()">Ausprobieren</button>'
}
function submit(){
    v ++
    i = document.getElementById("input").value
    if (i==z){
        o = " ist die gesuchte Zahl. Glückwunsch!"
        document.getElementById("prompt").innerHTML = ''
    }else{
        if (i>z){
            o = " ist größer als die gesuchte Zahl."
        }
        if (i<z){
            o = " ist kleiner als die gesuchte Zahl."
        }
        document.getElementById("prompt").innerHTML = 'Versuch '+ Number(v+1) +': <input id="input" type="number" onkeydown="if(event.keyCode == 13) { submit(); }"> &nbsp; <button onclick="submit()">Ausprobieren</button>'
    }
    document.getElementById("o").innerHTML += "Versuch "+v+': '+i+o+'<br>'
}
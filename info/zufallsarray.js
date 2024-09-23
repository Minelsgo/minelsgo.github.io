zArrray = []
for (let i = 0; i < 100; i++) {
    zArrray[i] = Math.round(Math.random()*100)
}
console.log(zArrray)
//MAX:
function maxi(Array){
    max=Array[0]
    max_i= 0
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] > max){
            max = Array[i]
            max_i = i
        }
    }
    return max_i
}
console.log(zArrray[maxi(zArrray)],'an Stelle', maxi(zArrray), 'ist der höheste Wert.')
//MIN
function mini(Array){
    min=Array[0]
    min_i= 0
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] < min){
            min = Array[i]
            min_i = i
        }
    }
    return min_i
}
console.log(zArrray[mini(zArrray)],'an Stelle', mini(zArrray), 'ist der niedrigste Wert.')
console.log("Tausch:")//
max=zArrray[maxi(zArrray)]
max_i=maxi(zArrray)
min_i=mini(zArrray)
zArrray[max_i]=zArrray[min_i]
zArrray[min_i]=max
console.log(zArrray)
console.log("In andere Reihenfolge:")//
arArray = []
for (let i = 0; i < zArrray.length; i++) {
    arArray[zArrray.length-1-i]=zArrray[i]
}
console.log(arArray)
console.log("Elemente finden:")//
found = []
zufinden = 45
for (let i = 0; i < zArrray.length; i++) {
    if (arArray[i] == zufinden){
        found.push(i)
    }
}
console.log(zufinden,"befindet sich", found.length, "mal im Array, bei i=",found)
console.log("Sortieren:")//
arArraycopy = arArray
sortArray = []
while (arArraycopy.length > 0){
    sortArray.push(arArraycopy[mini(arArraycopy)])
    arArraycopy.splice(mini(arArraycopy),1)
}
console.log(sortArray)
console.log("Hier Haltepunkt")
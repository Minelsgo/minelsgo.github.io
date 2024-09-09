input = "6868"
numbers = input.split("")
qs = 0
for (let index = 0; index < numbers.length; index++) {
    qs += +numbers[index];
}
console.log("Quersumme ist",qs)

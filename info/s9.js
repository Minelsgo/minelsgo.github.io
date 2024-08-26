n = "020131452"
numbers = n.split("")
s = 0
for (let index = 0; index < numbers.length; index++) {
    s += numbers[index]*(10-index);
}
x = 11-s%11
console.log(x)
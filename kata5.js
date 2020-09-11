function persistence(num) {
    let counter = 0
    function createArr(num) {
        num = num.toString().split('').map(v => parseInt(v))
        if (num.length === 1) {
            return counter
        }
        counter++
        num = num.reduce((cur, prev) => cur*prev)
        return createArr(num)
    }
    return createArr(num)
}

function persistence2(num) {
    let counter = 0;
    num = num.toString();
    while (num.length > 1) {
      counter++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    return counter
}

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))
console.log('-----------------')
console.log(persistence2(39))
console.log(persistence2(4))
console.log(persistence2(25))
console.log(persistence2(999))

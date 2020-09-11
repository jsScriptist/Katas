function add(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    if(num1.length > num2.length) num2 = num2.padStart(num1.length, '0')
    if(num2.length > num1.length) num1 = num1.padStart(num2.length, '0') 
    num1 = num1.split('')
    num2 = num2.split('')
    let result = ''
    for(k in num1) {
        result += Number(num1[k]) + Number(num2[k])
    }
    return Number(result)
}

console.log(add(16, 18)) // 214
console.log(add(2, 11)) // 13

function validatePIN (pin) {
    pin = pin.toString().split('').map(str => str === ' '? NaN : +str)
    console.log(pin.length)
    if((pin.length !== 4 && pin.length !== 6) || pin.includes(NaN)) return false
    return true
}

console.log(validatePIN('1'),false);
console.log(validatePIN('12'),false);
console.log(validatePIN('123'),false);
console.log(validatePIN('12345'),false);
console.log(validatePIN('1234567'),false);
console.log(validatePIN('-1234'),false);
console.log(validatePIN('1.234'),false);
console.log(validatePIN('-1.234'),false);
console.log(validatePIN('00000000'),false);
console.log(validatePIN('1234'),true);
console.log(validatePIN('0000'),true);
console.log(validatePIN('1111'),true);
console.log(validatePIN('123456'),true);
console.log(validatePIN('098765'),true);
console.log(validatePIN('000000'),true);
console.log(validatePIN('123456'),true);
console.log(validatePIN('090909'),true);
console.log(validatePIN(12345),true);
console.log('1234 '.split('').map(a => a==='' + a))
console.log(+'')


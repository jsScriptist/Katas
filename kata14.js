function isValidIP(str) {
    str = str.split('.')
    if (str.length !== 4) return false
    return !str.some(v => !v.match(/^\d+$/) || (v < 0 || v > 255) || (v.length > 1 && v[0] === '0'))
}

const net = require('net');
const isValidIP2 = (s) => net.isIP(s);

console.log(isValidIP2("0.0.0.0"), true)
console.log(isValidIP2("12.10.56.1"), true)
console.log(isValidIP2("137.255.156.100"), true)

console.log(isValidIP2(''), false)
console.log(isValidIP2('abc.def.ghi.jkl'), false)
console.log(isValidIP2('123.456.789.0'), false)
console.log(isValidIP2('12.34.56'), false)
console.log(isValidIP2('01.02.03.04'), false)
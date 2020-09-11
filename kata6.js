function rgb(r, g, b) {
    r < 0 ? r = 0 : r
    r > 255 ? r = 255 : r
    g < 0 ? g = 0 : g
    g > 255 ? g = 255 : g
    b < 0 ? b = 0 : b
    b > 255 ? b = 255 : b
    return (0x1000000+(r<<16)+(g<<8)+b).toString(16).substring(1).toUpperCase()
}

function rgb2(r, g, b) {
    return [r,g,b].map(x => ('0' + Math.max(0, Math.min(255, x))
    .toString(16))
    .slice(-2))
    .join('')
    .toUpperCase()
}

console.log(rgb(0, 0, 0)) // '000000'
console.log(rgb(0, 0, -20)) // '000000'
console.log(rgb(173,255,47)) //'ADFF2F'
console.log(rgb(300,255,255)) // 'FFFFFF'
console.log(rgb(300,100,10)) // 'FF640A'
console.log('-----------------')
console.log(rgb2(0, 0, 0)) // '000000'
console.log(rgb2(0, 0, -20)) // '000000'
console.log(rgb2(173,255,47)) //'ADFF2F'
console.log(rgb2(300,255,255)) // 'FFFFFF'
console.log(rgb2(300,100,10)) // 'FF640A'

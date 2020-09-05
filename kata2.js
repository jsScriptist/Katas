const text = 'Подсчета кол-ва вхождений каждого символа в строке'

function duplicateCount(text){ 
    const sums = {};
    text.toLowerCase().split('').map(e => sums[e] = !sums[e] ? 1 : sums[e] + 1)
    const arrDuplications = []
    Object.values(sums).forEach((value, index) => value > 1 ? arrDuplications[index] = value
     : arrDuplications[index] = undefined)
    const arrFiltered = arrDuplications.filter(el => el)
    return arrFiltered.length
}

console.log(duplicateCount(text))

function duplicateCount2(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
}

console.log(duplicateCount2(text))

function duplicateCount3(text){
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}

console.log(duplicateCount3(text))

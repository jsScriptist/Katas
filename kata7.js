function orderWeight(strng) {
    function sumUp(str) {
        return str.split('').reduce((cur, prev) => {
            return parseInt(cur) + parseInt(prev)
        })
    }
    return strng.split(' ')
                .sort((a, b) => {
                    return  sumUp(a) < sumUp(b) ? -1
                            : sumUp(a) > sumUp(b) ? 1
                            : a < b ? -1
                            : a > b ? 1
                            : 0
                })
                .join(' ')
}

console.log(orderWeight("103 123 4444 99 2000")) //"2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) 
//"11 11 2000 10003 22 123 1234000 44444444 9999"
console.log(orderWeight('71899703 1 200 4 6 4 6 7 27 18 81 96488 9 7 72 91 425 31064 2 7920 67407 34608557'))
//'1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'
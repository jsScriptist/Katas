function validParentheses(parens) {
    function checkForParity(arr) {
        const counter = new Map([...new Set(arr)].map(
            x => [x, arr.filter(y => y === x).length]
        ))
        return counter.get('(') !== counter.get(')')
    }
    function cutArr(arr) {
        const index = arr.findIndex(e => e === ')')
        arr.splice(index-1, 2)
        if(arr.length > 1) {
            return cutArr(arr)
        }
        return arr
    }
    function compare(str) {
        let arr = str.split('')
        if(checkForParity(arr)) {
            return false//answer = !answer
        } else {
            arr = cutArr(arr)
            if(arr[0] === ')' || arr[0] === '(') {
                //answer = !answer
                return false
            }
        }
        return true
    }
    return compare(parens)
}

function validParentheses2(parens){
    console.log(JSON.stringify(['abc', 1, 2, '3']))
    return [...parens].reduce((a, c) => (a + c).replace('()', '')) === '' ? true : false
}

console.log(validParentheses2('(())()'))

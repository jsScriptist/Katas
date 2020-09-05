const reverseBigWord = function (str) {
    const arr = str.split(' ')
    for (let k = 0; k < arr.length; k++) {
       if (arr[k].length > 4) {
            console.log(arr[k])
           arr[k] = arr[k].split('').reverse().join('')
       }
    }
    return arr.join(' ').trim()
}

console.log(reverseBigWord('Just kidding there is still one more'))

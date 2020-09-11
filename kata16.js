// function manhattanDistance(pointA, pointB){
//     let result = Math.abs(pointA[0] - pointB[0]) +
//         Math.abs(pointA[1] - pointB[1])
//     return result
//}

Array.prototype.getFirstElement = arr => arr[0]

let arr = [1, 2]

const x = new Array()

console.log(x.__proto__)
console.log(arr.getFirstElement(arr))

// 


//Исправьте код, чтобы в консоль выводились числа по порядку, не убирая setTimeout. Объясните свое решение.
// for (var n = 0; n < 10; n++) { 
//     (function(x) {
//         setTimeout(() => console.log( x ), 0)
//     })(n)
// }


//Напишите функцию, которая принимает в качестве аргумента строку с именем файла и возвращает расширение файла
// (часть строки после последней точки). Если расширение не найдено - выбрасывать исключение

// function getFileExtension(str) {
//     return str.slice((str.lastIndexOf('.') - 1 >>> 0) + 2)
// }

function getFileExtension(str) {
    try {
        str = str.split('')
        let index = null
        let result = ''
        for(let i = str.length - 1; i >= 0; i--) {
            if(str[i] === '.') {
                index = i
                break
            }
        }
        if(index !== null) for(let i = index + 1; i < str.length; i++) result += str[i]
        if(!result) throw new SyntaxError('Filename is without extension!')
        return result
    } catch(err) {
        console.log(err)
    }
}

console.log(getFileExtension('.site.jj/'));
